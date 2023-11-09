require('dotenv').config();
const jwt = require('jsonwebtoken');
const tokenAccess = require('../middleware/tokenManager');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



 const refreshAccessToken = (req, res, next) => {
    try {
      const accessToken = tokenAccess.generateToken(req, res);
      return res.send("New token generated");
    } catch (error) {
      console.log(`authController -> refreshToken -> ${error}`);
      next(error);
    }
  };

  module.exports = {refreshAccessToken};