let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");

let port = process.env.PORT || 5000;
let app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoURI = "mongodb://localhost:27017/half-time";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const userRouter = require("./routes/user");
app.use("/user", userRouter);

const playerRouter = require("./routes/players");
app.use("/api/players", playerRouter);

app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
