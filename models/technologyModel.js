const mongoose = require("mongoose");

const technologySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Technology", technologySchema);
