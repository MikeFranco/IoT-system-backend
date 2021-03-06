const { model, Schema } = require('mongoose');
const passportMongoose = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  },
  { versionKey: false }
);

userSchema.plugin(passportMongoose, { usernameField: 'email' });

module.exports = model('User', userSchema);
