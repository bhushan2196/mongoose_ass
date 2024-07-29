const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/assMongoose";

const connetion = mongoose.connect(url);

module.exports = connetion;
