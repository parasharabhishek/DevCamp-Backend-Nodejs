const Bootcamp = require("../models/Bootcamp");

//@desc  Get all bootcamps
//@route GET/api/v1/bootcamps
//@access Public
exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, count: bootcamp.length, data: bootcamp });
  } catch {
    res.status(400).json({
      success: false
    });
  }
};

//@desc  Get single bootcamp
//@route GET/api/v1/bootcamp/:id
//@access Private
exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    res.status(200).json({ success: true, data: bootcamp });
  } catch {
    res.status(400).json({
      success: false
    });
  }
};

//@desc  Create New bootcamp
//@route Post/api/v1/bootcamp
//@access Private
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({ success: true, data: bootcamp });
  } catch {
    res.status(400).json({
      success: false
    });
  }
};

//@desc  Update single bootcamp
//@route Put/api/v1/bootcamp/:id
//@access Private
exports.updateBootcamp = async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!Bootcamp) {
    res.status(400).json({
      success: false
    });
  }
  res.status(200).json({
    success: true,
    data: bootcamp
  });
};

//@desc  Delete bootcamp
//@route DELETE/api/v1/bootcamp/:id
//@access Private
exports.deleteBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  } catch {
    res.status(400).json({ success: false });
  }
};
