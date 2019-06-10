const mongoose = require('mongoose');
const Room = mongoose.model('rooms');
const Hotel = mongoose.model('hotels');
const roomValidator = require('../validation/room');

exports.createRoom = async (req, res) => {
  const { errors, isValid } = roomValidator(req.body);
  if (!isValid) return res.status(400).json(errors);

  try {
    const { hotelId, type, city, facilities, stars, price, adults, children } = req.body;

    const room = await new Room({
      hotel: hotelId,
      type, city, facilities, stars,
      price: parseInt(price, 10),
      adults: parseInt(adults, 10),
      children: parseInt(children, 10)
    }).save();

    await Hotel.findOneAndUpdate(
      { _id: hotelId },
      { "$push": { "rooms": hotelId } }
    );

    res.status(200).json(room);
  } catch (err) {
    res.status(400).json({ success: false, err });
    console.log(err);
  };
};

exports.getHotelRooms = async (req, res) => {
  try {
    const rooms = await Room.find({ hotel: req.params.hotelId });

    res.status(200).json(rooms);
  } catch (err) {
    res.status(400).json({ success: false, err });
    console.log(err);
  };
};