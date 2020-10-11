const express = require("express");
const db = require("./db");

const app = express();
const port = process.env.PORT || 6500;

app.get("/", (req, res) => {
  res.send("Hello World! " + db.connection.readyState);
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});
