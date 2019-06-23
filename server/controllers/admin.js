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
exports.registerUser = async ({ user, body: { id } }, res) => {
  try {
    const adminProfile = await AdminProfile.findOne({ user: user._id });
    const newRequests = adminProfile.requests.filter(req => req.user.toString() !== id);
    adminProfile.requests = newRequests;
    const updatedProfile = await adminProfile.save();

    await User.findOneAndUpdate(
      { _id: id },
      { role: 2 }
    );

    res.status(200).json(updatedProfile);
  } catch (err) {
    res.status(400).json({ success: false, err });
  };
};