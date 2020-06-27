const express = require('express');
const {
  devicePost,
  getById,
  getDevices,
  updateDevice,
  updateDeviceState,
  deleteDevice,
  toggleTurnOff
} = require('../controllers/DevicesControllers');
const router = express.Router();

router.get('/devices', getDevices);

router.post('/device', devicePost);

router.put('/device', updateDevice);

router.delete('/device/:id', deleteDevice);

router.get('/get-one-device/:id', getById);

router.put('/update-state', updateDeviceState);

router.put('/toggle-turn-off', toggleTurnOff);

module.exports = router;
