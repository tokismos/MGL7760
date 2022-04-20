const express = require("express");

const router = express.Router();
const model = require("../model");

router.get("/", async (req, res) => {
  const result = await model.find({});
  console.log("OOOOOOOK");
  res.send(result);
});

router.post("/add/:name", async (req, res) => {
  const newModel = new model({
    name: req.params.name,
  });

  try {
    const result = await newModel.save();
    res.status(200).send({ message: "DATA ADDED TO DB" });
  } catch (err) {
    res.status(400).send({ message: "Error, NOT ADDED TO DB", error: err });
  }
});

module.exports = router;
