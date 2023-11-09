const express = require("express");
const tokenAccess = require('../middleware/tokenManager');
const passport = require("passport");
const authController = require('../controllers/authController');
const requireToken = require("../middleware/requireRefreshToken")
const app = express();

// const {notLoggedIn} = require('../middlewares/authentication')

//   app.post('/signup', notLoggedIn, AuthenticationController.signUp)

// app.post('/login', notLoggedIn, AuthenticationController.login)

app.get("/refresh-access-token", requireToken.requiresRefreshToken, authController.refreshAccessToken);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: [
      "email",
      "profile",
      "https://www.googleapis.com/auth/calendar",
      "https://www.googleapis.com/auth/tasks",
    ],
  }),
);

app.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/authRoutes/protected",
    failureRedirect: "/auth/failure",
    scope: ["email", "profile", "https://www.googleapis.com/auth/calendar"],
  }),
);

app.get("/protected", (req, res) => {
  console.log("------api------");
  console.log(req.user);
  console.log("------------");
  tokenAccess.generateToken(req, res)
  tokenAccess.generateRefreshToken(req,res)
  // res.redirect(
  //   `https://mindmemo-auth.vercel.app/?data=${encodeURIComponent(
  //     JSON.stringify(req.user),
  //   )}`,
  // );
});

app.get("/auth/failure", (req, res) => {
  res.send("Something went wrong...");
});

module.exports = app;
