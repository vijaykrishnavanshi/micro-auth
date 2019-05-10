"use strict";
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const routes = require("./api/routes");

// Express App
const app = express();
// Setup DB Connection
// require("./db");

// Use default logger for now
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// This is to check if the service is online or not
app.get("/ping", function(req, res) {
  res.json({ reply: "pong" });
  res.end();
});

// error handler
app.use((error, req, res, next) => {
    console.log(error);
    return res.json({});
});

// Here you set the PORT and IP of the server
const port = process.env.PORT || 8001;
const ip = process.env.IP || "0.0.0.0";

app.listen(port, ip, function(error) {
  if (error) {
    console.error("Unable to listen for connections", error);
    throw error;
  }
  console.info(`Server on http://${ip}:${port}`);
});
