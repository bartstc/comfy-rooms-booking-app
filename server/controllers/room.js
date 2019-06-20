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

exports.searchForRooms = async ({ body }, res) => {
  let args = {};

  for (let key in body) {
    if (body[key] !== '') args[key] = body[key];
  };

  try {
    const rooms = await Room.find(args).populate('hotel').limit(10);
    res.status(200).json(rooms);
  } catch (err) {
    res.status(400).json({ success: false, err });
    console.log(err);
  };
};

exports.filterRooms = async (req, res) => {
  const { filters, limit, skip, searchData } = req.body;
  let filterData = {};
  let searchingData = {};

  // filters {
  // type: [],
  // stars: [],
  // facilities: [],
  // price: []
  // }
  for (let key in filters) {
    if (filters[key].length > 0) {
      if (key === 'price') {
        filterData[key] = {
          $gte: filters[key][0], // greater than first arg in array of prices
          $lte: filters[key][1] // lower than ...
        };
      } else if (key === 'facilities') {
        filterData[key] = {
          $elemMatch: { $in: filters[key] } // if any element in facilities match 
        };
      } else {
        filterData[key] = filters[key];
      };
    };
  };

  // searchData {
  //   city: '',
  //   adults: '2',
  //   children: '0'
  // }
  for (let key in searchData) {
    if (searchData[key] !== '') searchingData[key] = searchData[key];
  };

  try {
    const rooms = await Room.find({ ...searchingData, ...filterData })
      .populate('hotel')
      .skip(skip)
      .limit(limit);

    res.status(200).json(rooms);
  } catch (err) {
    res.status(400).json({ success: false, err });
    console.log(err);
  };
};

exports.getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id)
      .populate({
        path: 'hotel',
        populate: { path: 'pin' }
      });

    res.status(200).json(room);
  } catch (err) {
    res.status(400).json({ success: false, err });
    console.log(err);
  };
};

exports.removeRoom = async ({ params: { id } }, res) => {
  try {
    await Room.findOneAndDelete({ _id: id });
  } catch (err) {
    res.status(400).json({ success: false, err });
    console.log(err);
  };
};