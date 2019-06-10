const mongoose = require('mongoose');
const signinValidation = require('../validation/signin');
const signupValidation = require('../validation/signup');
const User = mongoose.model('users');

// SIGNUP USER
exports.signupUser = async (req, res) => {
  const { errors, isValid } = signupValidation(req.body);
  if (!isValid) return res.status(400).json(errors);

  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      errors.email = 'Email already exists';
      return res.status(400).json(errors);
    };

    const newUser = await new User({ ...req.body }).save();
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
  };
};

// SIGNIN USER
exports.signinUser = async (req, res) => {
  const { email, password } = req.body;

  const { errors, isValid } = signinValidation(req.body);
  if (!isValid) return res.status(400).json(errors);

  try {
    const user = await User.findOne({ email });

    user.comparePassword(password, (err, isMatch) => {
      if (!isMatch) {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      };

      user.generateToken(token => res.status(200).json({ token: `Bearer ${token}` }));
    });
  } catch (err) {
    errors.email = 'User not found';
    return res.status(404).json(errors);
  };
};