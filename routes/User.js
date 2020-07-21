const userRouter = require("express").Router();
const User = require("../models/User");
const Player = require("../models/Player");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const authConfig = require("../client/src/auth_config.json");

if (!authConfig.domain || !authConfig.audience) {
  throw new Error(
    "Please make sure that auth_config.json is in place and populated"
  );
}

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithms: ["RS256"],
});

// PATCH
userRouter.patch("/:id", (req, res) => {
  // User.findOneAndUpdate({ id: req.params.id }, { myteam: req.body.myteam })
  // .then(dbBook => res.json(dbBook))
  // .catch(err => res.status(422).json(err));
  console.log(req.body)
  User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    myteam: req.body
    // name: req.body
  })
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
    

});

userRouter.post("/saveteam", (req, res) => {
  const { name, email, sub, myteam } = req.body;

  const newUser = new User({ name, email, sub, myteam });
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
  console.log(req.body);
  console.log("hello");
});

// userRouter.post("/register", (req, res) => {
//   const { name, email, sub, myteam } = req.body;

//   const newUser = new User({ name, email, sub, myteam });
//   newUser.save((err) => {
//     if (err)
//       res.status(500).json({
//         message: { msgBody: "Error has occured", msgError: true },
//       });
//     else {
//       res.status(201).json({
//         message: {
//           msgBody: "Account successfully created",
//           msgError: false,
//         },
//       });
//     }
//   });
// });
userRouter.post("/register", (req, res) => {
  const { name, email, sub, myteam } = req.body;
  User.findOne({ name }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: "Error has occured", msgError: true } });
    if (user)
      res.status(400).json({
        message: { msgBody: "Username is already in use", msgError: true },
      });
    else {
      const newUser = new User({ name, email, sub, myteam });
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
// req.params.id
userRouter.get("/", (req, res) => {

  User.find().then(users => res.json(users)).catch(err => res.status(500).json(err))

});

userRouter.get("/:id", (req, res) => {

  User.findById(req.params.id).populate("myteam").then(user => res.json(user)).catch(err => res.status(500).json(err))

});

userRouter.post("/login", (req, res) => {
  if (req.isAuthenticated()) {
    const { _id, username } = req.user;
    const token = signToken(_id);
    res.cookie("access_token", token, { httpOnly: true, sameSite: true });
    res.status(200).json({ isAuthenticated: true, user: { username } });
  }
});

userRouter.get("/logout", (req, res) => {
  res.clearCookies("access_token");
  res.json({ user: { username: "" }, success: true });
});

userRouter.post("/myteam", (req, res) => {
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
});

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

userRouter.get("/authenticated", (req, res) => {
  const username = req.user;
  res.status(200).json({ isAuthenticated: true, user: { username } });
});

module.exports = userRouter;
