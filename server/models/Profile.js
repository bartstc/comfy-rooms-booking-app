const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  history: [
    {
      rated: {
        type: Boolean,
        default: false
      },
      paid: {
        type: Boolean,
        default: false
      },
      total: {
        type: Number,
        required: true,
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