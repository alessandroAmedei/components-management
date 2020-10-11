const mongoose = require("mongoose");

const objectSchema = new mongoose.Schema({
  name: String,
  description: String,
  color: String,
  barcode: String,
});

const objectModel = mongoose.model("Object", objectSchema);

const o = new objectModel({
  name: "a",
  description: "b",
  color: "c",
  barcode: "d",
});

module.exports = objectModel;
