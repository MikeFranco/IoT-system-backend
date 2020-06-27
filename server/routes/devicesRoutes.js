const express = require('express');
const {
  devicePost,
  getById,
  getDevices,
  updateDevice,
  deleteDevice
} = require('../controllers/DevicesControllers');
const router = express.Router();

router.get('/devices', getDevices);

router.post('/device', devicePost);

router.put('/device', updateDevice);

router.delete('/device', deleteDevice);

router.get('/get-one-device/:id', getById);


module.exports = router;
