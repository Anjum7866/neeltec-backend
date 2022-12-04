const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const clients = require("./routes/api/clients");
const jobsheet = require("./routes/api/jobsheet");
const email = require("./routes/api/email");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

const corsOpts = {
  origin: '*',
  methods: [
    'GET',
    'POST',
    'DELETE',
    'UPDATE',
    'PUT',
    'PATCH'
  ],
  allowedHeaders: [
    'Content-Type',
  ],
};
app.use(cors(corsOpts));

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
app.use("/api/email", email);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
