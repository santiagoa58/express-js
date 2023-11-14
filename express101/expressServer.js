const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

app.all("/", (req, res) => {
  res.sendFile(path.join(`${__dirname}/node.html`));
});

app.all("*", (req, res) => {
  res.sendFile(path.join(`${__dirname}/404.html`));
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
