const mongoose = require('mongoose');
const Hotel = mongoose.model('hotels');
const Pin = mongoose.model('pins');
const hotelValidator = require('../validation/hotel');
const keys = require('../config/keys');
const cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: keys.cloudName,
  api_key: keys.cloudAPIKey,
  api_secret: keys.cloudAPISecret
});

// Add hotel
exports.createHotel = async (req, res) => {
  const { errors, isValid } = hotelValidator(req.body);
  if (!isValid) return res.status(400).json(errors);

  const { type, stars, name, city, address, contact, description, emailTitle, emailSubject, emailBody, images, pin } = req.body;

  try {
    const createdPin = await new Pin({
      title: pin.title,
      description: pin.description,
      longitude: pin.longitude,
      latitude: pin.latitude,
      image: images.length !== 0 ? images[0].url : null
    }).save();

    const hotel = await new Hotel({
      owner: req.user._id,
      type,
      name,
      city,
      address,
      description,
      emailTitle,
      emailSubject,
      emailBody,
      images,
      pin: createdPin._id,
      stars: parseInt(stars, 10),
      contact: parseInt(contact, 10)
    }).save();

    res.status(200).json(hotel);
  } catch (err) {
    res.status(400).json({ success: false, err });
  };
};

// Get user hotels
exports.getUserHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find({ owner: req.user._id })

    res.status(200).json(hotels);
  } catch (err) {
    res.status(400).json({ success: false, err });
  };
};

// Upload image
exports.uploadImage = (req, res) => {
  cloudinary.uploader.upload(req.files.file.path, (result) => {
    res.status(200).json({
      public_id: result.public_id,
      url: result.url
    });

  }, {
      public_id: `${Date.now()}`,
      resource_type: 'auto' // type of image (png, jpg), auto -> cloudinary automaticly recognize type
    });
};

// Remove image
exports.removeImage = (req, res) => {
  let image_id = req.query.public_id;

  cloudinary.uploader.destroy(image_id, (err, result) => {
    if (err) return res.json({ success: false }); // we can get it on te client (in this case we dont)
    res.status(200).json({ success: 'true' });
  });
};