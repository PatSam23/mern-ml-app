const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  resumes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resume',
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
// This code defines a Mongoose schema for the User model.
// It includes fields for name, email, password, and an array of resumes.