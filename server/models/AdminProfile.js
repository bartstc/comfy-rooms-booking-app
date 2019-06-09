const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  requests: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ]
});

mongoose.model('adminprofiles', adminProfileSchema);