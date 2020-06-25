const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { signup } = require('../controllers/authControllers');
const passport = require('../config/passport');

router.post('/sign-up', signup);

// router.post('/login', async (req, res) => {
//   const { email } = req.body;
//   const user = await User.findOne({email});
//   const { _id } = user;

//   console.log('%c⧭', 'color: #aa00ff', user);
//   const userHash = await User.findById(_id)
//   res.status(200).json({ ok: true, user });
// });

router.post('/login', passport.authenticate('local'), async(req, res) => {
    const { _id } = req.user;

    console.log('%c⧭', 'color: #e50000', req);
    const user = await User.findById(_id);
    res.status(200).json({ ok: true, user })
});

module.exports = router;
