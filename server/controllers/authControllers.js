const User = require('../models/User');

exports.signup = async (req, res) => {
  const { email, username, password } = req.body;
  const user = await User.register({ username, email }, password);
  res.status(200).json({ ok: true, user });
};
