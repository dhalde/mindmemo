const express = require('express');
const app = express();
const passport = require('passport');
const memoController = require('../controllers/memoController');
const authMiddleware = require('../middleware/authentication');

// app.use(passport.authenticate('jwt', {session: false}))

 
app.post('/userMemo', authMiddleware.requiresToken, memoController.userMemo)   


module.exports = app;
