const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use Routes

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    app.listen(port);
    console.log('DB connected')
  })
  .catch(err => {
    console.log(err);
  });