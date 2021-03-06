const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
      },
      id: {
        type: String,
        required: true,
        unique: true,
      },
    },
    {
      toJSON: {
        virtuals: true,
      },
    }
  );

const User = model('User', userSchema);

module.exports = User;