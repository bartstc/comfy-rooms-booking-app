const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;
require('./models/User');
require('./models/Hotel');
require('./models/Room');
require('./models/Profile');
require('./models/AdminProfile');
require('./models/Pin');

const users = require('./routes/user');
const profiles = require('./routes/profile');
const hotels = require('./routes/hotel');
const rooms = require('./routes/room');
const admin = require('./routes/admin');

const app = express();

app.use(express.json());

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./services/passport')(passport);

// Use Routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/hotels', hotels);
app.use('/api/rooms', rooms);
app.use('/api/admin', admin);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  })
};

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    app.listen(port);
    console.log('DB connected')
  })
  .catch(err => {
    console.log(err);
  });