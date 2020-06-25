const { model, Schema } = require('mongoose');
const passportMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
      type: String,
      unique: true,
      required: true
    },
    username: {
      type: String,
      required: true
    }
});

userSchema.plugin(passportMongoose, { usenameField: 'email' });

module.exports = model('User', userSchema);
