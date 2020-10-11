const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.DB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err, db) => {
    if (!err) {
      console.log("connected!");
    } else {
      console.log("error");
    }
  }
);

module.exports = mongoose;
