const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { signup, login } = require('../controllers/authControllers');
const passport = require('../config/passport');

router.post('/sign-up', signup);

router.post('/login', passport.authenticate('local'), login);

module.exports = router;
