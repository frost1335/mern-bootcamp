const Bootcamp = require("../models/Bootcamp");

exports.getAllBootcamps = async (req, res, next) => {
  const bootcamps = await Bootcamp.find();

  res.status(200).json({
    success: true,
    data: bootcamps,
  });
};

exports.createNewBootcamp = (req, res, next) => {
  res.send("Create new bootcamps");
};

exports.updateBootcampById = (req, res, next) => {
  res.send("Update bootcamp by id");
};

exports.deleteBootcampById = (req, res, next) => {
  res.send("Delete bootcamp by id");
};

