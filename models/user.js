const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    first: {
      type: String,
    },
    last: {
      type: String,
    },
    age: {
      type: Number,
    },
    email:{
      type: String,
    },
    createdDate: {
      type: Date,
      default: Date.now
    }
  });

  const collectionName = 'UserMan';
  const User = mongoose.model('User', userSchema, collectionName)
  module.exports = User;