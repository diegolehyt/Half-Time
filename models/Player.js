const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PlayerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("Player", PlayerSchema);
