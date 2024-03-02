const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  demo: {
    type: String,
    required: true,
  },
  gitLink: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
