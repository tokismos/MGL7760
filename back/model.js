const mongoose = require("mongoose");
const modelSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const model = mongoose.model("model", modelSchema);
module.exports = model;
