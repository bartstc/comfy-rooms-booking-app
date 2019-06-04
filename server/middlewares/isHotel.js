module.exports = (req, res, next) => {
  if (!req.hotelCredentials.isHotel) {
    return res.send('You are not allowed!');
  };

  next();
};