const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://admin:CKImih94798@node20776-env-2302009.it1.eur.aruba.jenv-aruba.cloud/sondip",
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
