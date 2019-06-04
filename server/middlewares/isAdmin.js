module.exports = (req, res, next) => {
  if (req.user.role === 0) { // 0 = user, 1 = admin
    return res.send('You are not allowed!');
  };

  next();
};