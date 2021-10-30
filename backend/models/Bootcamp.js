const { Schema, model } = require("mongoose");

const bootcampSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name to the bootcamp"],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true, "Please provide a rating for a bootcamp"],
  },
  description: {
    type: String,
    required: [true, "Please provide bootcamp with description"],
  },
  price: {
    type: Number,
    requird: [true, "Please provide bootcamp with price"],
  },
});

const Bootcamp = model("bootcamp", bootcampSchema);

module.exports = Bootcamp;
