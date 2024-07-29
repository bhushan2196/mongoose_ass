const mongoose = require("mongoose");
const { version } = require("os");

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
