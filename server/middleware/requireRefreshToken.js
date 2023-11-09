require('dotenv').config();
const jwt = require('jsonwebtoken')

const requiresRefreshToken = (req, res, next) => {
  try {
    const refreshToken = req.headers['refreshtoken'];
    console.log("req.header");
    console.log(refreshToken);

    if (!refreshToken) {
      throw new Error("Refresh token cookie is missing or invalid.");
    }

    const uid  = jwt.verify(refreshToken, process.env.refresh_token);

    console.log("----------");
    console.log( uid);
    req.user = {};
    req.user.googleId = uid.user;
    next();
  } catch (error) {
    console.log(`Requires token failed: ${error}`);
    res.status(403).json({ error: error.message });
  }
};

module.exports = {requiresRefreshToken};