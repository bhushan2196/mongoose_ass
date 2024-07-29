const express = require("express");
const userModel = require("../model/user.model");
const { AsyncLocalStorage } = require("async_hooks");

const userRoute = express.Router();

userRoute.post("/create_user", async (req, res) => {
  const { name, age, email, city, zip } = req.body;

  const exsitingUser = await userModel.findOne({ email: email });
  if (exsitingUser) {
    res.status(400).send("User already exists");
  } else {
    try {
      const user = new userModel({
        name,
        age,
        email,
        city,
        zip,
      });
      await user.save();
      res.send(`user created`);
    } catch (error) {
      res.send(`user creating error ${error}`);
    }
  }
});

userRoute.get("/get_user", async (req, res) => {
  try {
    const users = await userModel.find();
    res.send({ msg: "data recived", users });
  } catch (error) {
    res.send(error);
  }
});

userRoute.patch("/update_user/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userModel.findByIdAndUpdate({ _id: id }, req.body);
    res.json({ msg: "user Update", user });
  } catch (error) {
    res.send("update error");
  }
});

userRoute.delete("/delete_user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await userModel.findByIdAndDelete({ _id: id });
    res.json({ msg: "user deleted", deleteUser });
  } catch (error) {
    res.send(error);
  }
});
module.exports = userRoute;
