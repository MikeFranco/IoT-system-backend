const { model, Schema } = require('mongoose');

const deviceSchema = new Schema({
  id: {
    type: String
  },
  type: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  manufacturer: {
    type: String,
    required: true
  },
  state: {
    type: Object,
    required: true
  }
});

module.exports = model('Devices', deviceSchema);
