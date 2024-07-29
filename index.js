const express = require("express");
const connetion = require("./config/db");
const userRoute = require("./routes/user.route");

const PORT = 3000;
const app = express();

app.use(express.json());
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("home page is here");
});

app.listen(PORT, async (req, res) => {
  try {
    await connetion;
    console.log("database and server started");
  } catch (error) {
    console.log(error);
  }
});
