const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PlayerSchema = new Schema({
    id: {
      type: Number
    },
    name: {
      type: String,
      required: true,
    },
    player_image: {
      type: String,
      required: true,
    },
    nation_image: {
      type: String,
      required: true,
    },
    club_image: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    rating_overall: {
      type: String,
      required: true,
    },
    rating_pace: {
      type: String,
      required: true,
    },
    rating_shooting: {
      type: String,
      required: true,
    } ,
    rating_passing: {
      type: String,
      required: true,
    },
    rating_dribbling: {
      type: String,
      required: true,
    },
    rating_defense: {
      type: String,
      required: true,
    },
    rating_physical: {
      type: String,
      required: true,
    }
});

module.exports = User = mongoose.model("Player", PlayerSchema);
