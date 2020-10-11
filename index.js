const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const db = require("./db");
const objectModel = require("./schemas/Object");

const app = express();
const port = process.env.PORT || 6500;

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

app.get("/api/objects", (req, res) => {
  objectModel.find((err, documents) => {
    if (err) res.status(500).json(err);
    res.json(documents);
  });
});

app.post("/api/objects", (req, res) => {
  let body = req.body;
  console.log(body);
  let obj = new objectModel(body);
  obj.save((err, document) => {
    if (err) res.status(500).json(err);
    res.json(document);
  });
});

app.delete("/api/objects", (req, res) => {
  let id = req.body.id;
  objectModel.deleteOne({ _id: id }, (err) => {
    if (err) res.status(500).json(err);
    res.json({
      deleted: "ok",
    });
  });
});

app.delete("/api/objects/reset", (req, res) => {
  objectModel.deleteMany({}, (err) => {
    if (err) res.status(500).json(err);
    res.json({
      deleted: "ok",
    });
  });
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
