const mongoose = require("mongoose");
const Player = require("./Player")

const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  sub: {
    type: String,
  },
  email: {
    type: String,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  myteam: [
    { type: mongoose.Schema.Types.ObjectId, ref: Player },
  ],
});

// UserSchema.pre("save", function (next) {
//   if (!this.isModified("password")) return next();
//   bcrypt.hash(this.password, 10, (err, passwordHash) => {
//     if (err) return next(err);
//     this.password = passwordHash;
//     next();
//   });
// });

// UserSchema.methods.comparePassword = function (password, cb) {
//   bcrypt.compare(password, this.password, (err, isMatch) => {
//     if (err) return cb(err);
//     else {
//       if (!isMatch) return cb(null, isMatch);
//       return cb(null, this);
//     }
//   });
// };

module.exports = User = mongoose.model("User", UserSchema);
