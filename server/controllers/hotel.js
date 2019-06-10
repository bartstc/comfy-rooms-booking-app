const mongoose = require('mongoose');
const Hotel = mongoose.model('hotels');
const hotelValidator = require('../validation/hotel');

// Add hotel
exports.createHotel = async (req, res) => {
  const { errors, isValid } = hotelValidator(req.body);
  if (!isValid) return res.status(400).json(errors);

  try {
    const hotel = await new Hotel({
      owner: req.user._id,
      ...req.body,
      stars: parseInt(req.body.stars, 10),
      contact: parseInt(req.body.contact, 10)
    }).save();

    res.status(200).json(hotel);
  } catch (err) {
    res.status(400).json({ success: false, err });
    console.log(err);
  };
};

exports.getUserHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({ owner: req.user._id })

    res.status(200).json(hotels);
  } catch (err) {
    res.status(400).json({ success: false, err });
    console.log(err);
  };
};