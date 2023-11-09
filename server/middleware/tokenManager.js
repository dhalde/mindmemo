const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config();

const generateToken = async (req, res) => {
    console.log('-----req-------')
    console.log(req.user);
    console.log('------------') 
    const user = req.user;
    const expiresIn = 15;
    const token = jwt.sign({user: user.googleId}, process.env.secret_key, {expiresIn})
    console.log('-----tokennnn-------')
    console.log(token);
    res.cookie('jwt', token, { httpOnly: true });
    
  }

  const generateRefreshToken = (req, res) => {
    const expiresIn = 60 * 60 * 8;
    const user = req.user;
    try {
      const refreshToken = jwt.sign({user: user.googleId}, process.env.refresh_token, {expiresIn})
  
      res.cookie("refreshToken", refreshToken, { httpOnly: true }).sendStatus(200);
    } catch (error) {
      console.log(`Failed to generate refresh JWT: ${error}`);
    }
  };
  
  

  module.exports = {generateToken, generateRefreshToken}