const mongoose = require("mongoose");

const headerDetailsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  images: [],
});

module.exports = mongoose.model("HeaderDetail", headerDetailsSchema);
