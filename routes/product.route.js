const productModel = require("../model/product.model");
const express = require("express");

const productRoute = express.Router();

productRoute.post("/create", async (req, res) => {
  const { name, price, discription } = req.body;
  try {
    const product = new productModel({
      name,
      price,
      discription,
    });
    await product.save();
    res.send("product added");
  } catch (error) {
    res.send(`error to add product`);
  }
});

productRoute.get("/get", async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.send(error);
  }
});

productRoute.patch("/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updateProduct = await productModel.findByIdAndUpdate(
      { _id: id },
      req.body
    );
    res.json({ msg: "product update", updateProduct });
  } catch (error) {
    res.send(error);
  }
});

productRoute.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteProduct = await productModel.findByIdAndDelete({ _id: id });
    res.json({ msg: "product delete", deleteProduct });
  } catch (error) {
    res.send(error);
  }
});

module.exports = productRoute;
