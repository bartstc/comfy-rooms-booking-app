const mongoose = require('mongoose');
const Profile = mongoose.model('profiles');

exports.createProfile = async (req, res) => {
  try {
    const newProfile = await new Profile({ user: req.user.id }).save();
    res.status(200).json(newProfile);
  } catch (err) {
    res.status(400).json({ success: false, err });
  };
};