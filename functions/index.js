// Modules
const functions = require("firebase-functions");
const express = require("express");
const cors = require('cors');

// Files
const { db } = require("./connection/initialize_firebase");

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Routes
const routes = require("./routes/index");
app.use("/", routes);

// Not found
app.use((req, res, next) => {
  res.status(404).send({
    success: false,
    message: "Not found",
  });
});

// Error
app.use((err, req, res, next) => {
  console.log('Error ==>>> ', err)
  res.status(500).send({
    success: false,
    message: "Something went wrong",
  });
});


exports.api = functions.https.onRequest(app);
