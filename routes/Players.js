const playerRouter = require("express").Router();
const Player = require("../models/Player");

playerRouter.get(
    "/",
    (req, res) => {
        Player.find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
)

module.exports = playerRouter;

// userRouter.put(
//   "/myteam",
//   passport.authenticate("jwt", {session: true}
//   )
//   (req, res) => {

//   }
// )