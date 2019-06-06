const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretOrKey } = require('../config/keys');
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  role: {
    type: Number, // 0: standard account, 1: owner (authorized to provide the hotel), 2: admin
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  };

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    })
  })
});

userSchema.methods.comparePassword = async function (candidatePassword, cb) {
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    cb(null, isMatch);
  } catch (err) {
    cb(err);
  };
};

userSchema.methods.generateToken = function (cb) {
  const payload = {
    id: this._id.toHexString(),
    fullname: this.fullname,
    email: this.email,
    role: this.role
  };

  const token = jwt.sign(payload, secretOrKey, { expiresIn: 3600 });
  cb(token);
};

mongoose.model('users', userSchema);