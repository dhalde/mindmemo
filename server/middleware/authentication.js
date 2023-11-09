const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
require('dotenv').config();
const token = require('../middleware/tokenManager');

async function requiresToken(req, res, next) {
  try{
    const token = req.headers['jwt'];
    if (!token) {
      throw new Error("Refresh token cookie is missing or invalid.");
    }

    const uid  = jwt.verify(token, process.env.secret_key);

    console.log("----------");
    console.log( uid);
    req.user = {};
    req.user.googleId = uid.user;
    next();

  }
 catch (err) {
  console.log(`Jwt token may expired`);
  // res.redirect('/authRoutes/refresh-access-token');
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
    token.generateToken(req, res);
    next();
  } catch (error) {
    console.log(`Requires token failed: ${error}`);
    res.status(403).json({ error: error.message });
  }
};

}

module.exports = {
  requiresToken
};



// console.log(`token: ${token}`);
// if (token) {
//   try {
//     console.log('-----notloggedin-------') 
//     console.log(req.user)
//     const payload = jwt.verify(token, process.env.secret_key);
//     console.log("payload" + payload);
//     if (payload && payload.user == req?.user.googleId) {
//       console.log('-----payloaduser-------')
//       console.log(payload.user);
//       console.log('------------')
//       const user = await prisma.user.findUnique({
//         where: { id: payload.user },
//         select: { id: true, email: true, name: true }, // Adjust fields as needed
//       });

//       // if (user) {
//         //   return res.status(400).json({
//           //     msg: "Already logged in"
//           //   });
//           // }
//       req.user = user;
//       next();
//     }
//     else {
//       console.log("print0");
//     }