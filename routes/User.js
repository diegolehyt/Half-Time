const userRouter = require("express").Router();
const passport = require("passport");
const passportConfig = require("../passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Player = require("../models/Player");
const user = require("../models/User");

const signToken = (userID) => {
  return JWT.sign(
    {
      iss: "Admin",
      sub: userID,
    },
    "test",
    { expiresIn: "1h" }
  );
};

userRouter.post("/register", (req, res) => {
  const { fullname, username, password, email } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: "Error has occured", msgError: true } });
    if (user)
      res.status(400).json({
        message: { msgBody: "Username is already in use", msgError: true },
      });
    else {
      const newUser = new User({ fullname, username, password, email });
      newUser.save((err) => {
        if (err)
          res.status(500).json({
            message: { msgBody: "Error has occured", msgError: true },
          });
        else {
          res.status(201).json({
            message: {
              msgBody: "Account successfully created",
              msgError: false,
            },
          });
        }
      });
    }
  });
});

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username } = req.user;
      const token = signToken(_id);
      res.cookie("access_token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({ isAuthenticated: true, user: { username } });
    }
  }
);

userRouter.get(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.clearCookies("access_token");
    res.json({ user: { username: "" }, success: true });
  }
);

userRouter.post(
  "/myteam",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const player = new Player(req, body);
    player.save((err) => {
      if (err)
        res
          .status(500)
          .json({ message: { msgBody: "Error has occured", msgError: true } });
      else {
        req.user.myteam.push(player);
        req.user.save((err) => {
          if (err)
            res.status(500).json({
              message: { msgBody: "Error has occured", msgError: true },
            });
          else {
            res.status(200).json({
              message: {
                msgBody: "Successfully added player",
                msgError: false,
              },
            });
          }
        });
      }
    });
  }
);

// userRouter.get(
//   "/myteam",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     User.findById({ _id: req.user, _id })
//       .populate("myteam")
//       .exec((err, document) => {
//         if (err)
//           res.status(500).json({
//             message: { msgBody: "Error has occured", msgError: true },
//           });
//         else {
//           res.status(200).json({
//             myteam: document.myteam,
//             authenticated: true,
//           });
//         }
//       });
//   }
// );

userRouter.get(
  "/authenticated",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const username = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username } });
  }
);

module.exports = userRouter;
