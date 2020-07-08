const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullname: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  favTeam: { type: String, required: true },
  myTeam: { type: Array },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
