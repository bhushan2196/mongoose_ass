const mongoose = require("mongoose");
const { version } = require("os");

const productSchema = mongoose.Schema(
  {
    name: { type: String, reuired: true },
    price: { type: Number, reuired: true },
    discription: { type: String, reuired: true },
  },
  {
    versionKey: false,
  }
);

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;
