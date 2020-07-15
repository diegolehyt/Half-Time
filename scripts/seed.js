const Player = require("../models/Player")
const players = require("../seed/players.json")
const mongoose = require('mongoose')

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/half-time"
);

Player
  .remove({})
  .then(() => Player.collection.insertMany(players))
  .then(data => {
    console.log(data.result.n + " players inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
