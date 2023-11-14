const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Welcome From a GET Request</h1>");
});
app.post("/", (req, res) => {
  res.send("<h1>Welcome From a POST Request</h1>");
});
app.put("/", (req, res) => {
  res.send("<h1>Welcome From a PUT Request</h1>");
});
app.delete("/", (req, res) => {
  res.send("<h1>Welcome From a DELETE Request</h1>");
});
app.patch("/", (req, res) => {
  res.send("<h1>Welcome From a PATCH Request</h1>");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
