const mongoose = require("mongoose");

/* Creating a schema for the weight model. */
const weightSchema = new mongoose.Schema(
  {
    weight: {
      type: Number,
      required: true,
      min: 0,
      max: 255,
    },
    bodyFat: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    muscleMass: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Weight", weightSchema);
