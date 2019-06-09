const mongoose = require('mongoose');
const keys = require('../config/keys');
const Profile = mongoose.model('profiles');
const Hotel = mongoose.model('hotels');
const AdminProfile = mongoose.model('adminprofiles');

// Create standard user profile
exports.createUserProfile = async (req, res) => {
  try {
    const newProfile = await new Profile({ user: req.user._id }).save();
    res.status(200).json(newProfile);
  } catch (err) {
    res.status(400).json({ success: false, err });
  };
};

// Get a profile depending on the role of the user
exports.getProfile = async (req, res) => {
  const { role } = req.user;
  try {
    if (role === 0) {
      const profile = await Profile.findOne({ user: req.user._id });
      if (!profile) return res.status(200).json({});
      return res.status(200).json(profile); // return null if doesn't exist
    };

    if (role === 1) {
      return res.status(200).json({ status: 'Is waiting for registration.' })
    };

    if (role === 2) {
      const hotels = await Hotel.find({ owner: req.user._id });
      return res.status(200).json({ hotels });
    };

    if (role === 3) {
      const profile = await AdminProfile.findOne({ user: req.user._id });
      return res.status(200).json(profile);
    };

  } catch (err) {
    res.status(400).json({ success: false, err });
  };
};

// Send a message to the admin asking for registration in order to enable sharing of hotel objects
exports.askForRegistration = async (req, res) => {
  try {
    await AdminProfile.findOneAndUpdate(
      { user: keys.adminId1 },
      { "$push": { "requests": { user: req.user._id } } }
    );

    req.user.role = 1;
    const user = await req.user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ success: false, err });
  };
};