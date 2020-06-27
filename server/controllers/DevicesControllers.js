const Devices = require('../models/DeviceModel.js');

exports.devicePost = async (req, res) => {
  const { id, type, label, manufacturer, state } = req.body.device;

  const data = {
    id,
    type,
    label,
    manufacturer,
    state
  };
  const createDevice = await Devices.create(data);
  res.json({ ok: true, createDevice });
};

exports.getById = async (req, res) => {
  const { id } = req.body;

  const getById = await Devices.findById(id);
  res.json({ ok: true, getById });
};

exports.getDevices = async (req, res) => {
  const getDevices = await Devices.find();

  res.json({ ok: true, getDevices });
};

exports.updateDevice = async (req, res) => {
  const { id, type, label, manufacturer, state } = req.body;

  const data = {
    id,
    type,
    label,
    manufacturer,
    state
  };

  const updatedDevice = await Devices.findByIdAndUpdate(id, data, {
    new: true
  });
  res.json({ ok: true, updatedDevice });
};

exports.updateDeviceState = async (req, res) => {
  const { id, deviceState } = req.body;

  const data = {
    id,
    state: deviceState
  };

  const updatedDeviceState = await Devices.findByIdAndUpdate(id, data, {
    new: true
  });
  res.json({ ok: true, updatedDeviceState });
};

exports.toggleTurnOff = async (req, res) => {
  const { id, turnOnValue } = req.body;

  const data = {
    id,
    state: {
      turnedOn: turnOnValue
    }
  };

  const toggleTurnedOff = await Devices.findByIdAndUpdate(id, data, {
    new: true
  });
  res.json({ ok: true, toggleTurnedOff });
};

exports.deleteDevice = async (req, res) => {
  const { id } = req.params;

  await Devices.findByIdAndDelete(id);
  res.json({ ok: true, msg: 'Device deleted' });
};
