const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
  history: [
    {
      rated: {
        type: Boolean,
        default: false
      },
      hotelName: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      contact: {
        type: Number,
        required: true
      },
      checkIn: {
        type: Date,
        required: true
      },
      checkOut: {
        type: Date,
        required: true
      }
    }
  ]
});

mongoose.model('profiles', profileSchema);