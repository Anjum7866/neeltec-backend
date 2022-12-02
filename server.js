const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const clients = require("./routes/api/clients");
const jobsheet = require("./routes/api/jobsheet");
const app = express();
const cors = require("cors");

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
app.use(cors({
  origin:"http://localhost:3000",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/clients", clients);
app.use("/api/jobsheet", jobsheet);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
