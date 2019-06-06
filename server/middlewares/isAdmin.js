module.exports = (req, res, next) => {
  if (!req.user.role === 2) {
    return res.send('You are not allowed!');
  };

  next();
};