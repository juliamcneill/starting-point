const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + "/../client/dist"));

app.get("/route", (req, res) => {
  res.status(200).json("Server is working!");
});

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
