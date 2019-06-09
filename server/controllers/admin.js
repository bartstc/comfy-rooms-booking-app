const mongoose = require('mongoose');
const User = mongoose.model('users');
const AdminProfile = mongoose.model('adminprofiles');

exports.createAdminProfile = async (req, res) => {
  try {
    const newProfile = await new AdminProfile({ user: req.user._id }).save();
    res.status(200).json(newProfile);
  } catch (err) {
    res.status(400).json({ success: false, err });
  };
};

// Give the user the rights to add his hotel offers
exports.registerUser = async ({ user, body: { userId } }, res) => {
  try {
    await AdminProfile.findOneAndUpdate(
      { user: user._id },
      { "$pull": { "requests": { user: userId } } }
    );

    await User.findOneAndUpdate(
      { _id: userId },
      { role: 2 }
    );

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, err });
  };
};