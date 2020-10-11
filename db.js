const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://admin:CKImih94798@95.110.177.2:27017",
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
