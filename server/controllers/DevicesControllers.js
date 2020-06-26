const Devices = require('../models/DeviceModel.js');

exports.devicePost = async (req,res) => {
    const {id, type, label, manufacter, state } = req.body;

    const data = {
        id,
        type,
        label,
        manufacter,
        state
    }
    const createIot = await Devices.create(data)
    res.json({ok: true, createIot})
}

exports.getById = async (req, res) => {
    const {id} = req.params;
    
    const getById = await Devices.findById(id);
    res.json({ok: true, getById});
}

exports.getDevice = async (req, res) => {
    const getDevice = await Devices.find();
    res.json({ok: true, getDevice});
}

exports.updateIot = async (req, res) => {
    const {id} = req.params;
    const {idLocal, type, label, manufacter, state } = req.body;

    const data = {
        id: idLocal,
        type,
        label,
        manufacter,
        state
    }

    const updatedIot = await Devices.findByIdAndUpdate(id, data, {new: true});
    res.json({ok: true, updatedIot})
}

exports.deleteIot = async (req, res) => {
    const {id} = req.params;
    await Devices.findByIdAndDelete(id);
    res.json({ok: true, msg:'Device deleted'})
}