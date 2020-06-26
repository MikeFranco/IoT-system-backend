const { model, Schema } = require('mongoose');

const deviceSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  manufacter: {
    type: String,
    required: true
  },
  state: {
    type: Object,
    required: true
  }
});

module.exports = model('Devices', deviceSchema);
