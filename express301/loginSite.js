// Import modules
const express = require("express");
const helmet = require("helmet");
const path = require("path");
const cookieParser = require("cookie-parser");
const app = express();
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  if (req.query.msg === "failed") {
    res.locals.msg =
      "Sorry, this username and password combination does not exist";
  } else {
    res.locals.msg = "";
  }
  next();
});
app.get("/login", (req, res) => {
  // not secured at all but just for demo purposes
  if (!!req.cookies.username) {
    res.redirect("/welcome");
  } else {
    res.render("login");
  }
});

app.post("/logout", (req, res) => {
  res.clearCookie("username");
  res.redirect("/login");
});

app.get("/welcome", (req, res) => {
  // not secured at all but just for demo purposes
  if (!req.cookies.username) {
    res.redirect("/login");
  } else {
    res.render("welcome", {
      username: req.cookies.username,
    });
  }
});

app.post("/process_login", (req, res, next) => {
  const password = req.body.password;
  const username = req.body.username;
  if (password === "x") {
    res.cookie("username", username);
    res.redirect("/welcome");
  } else {
    res.redirect("/login?msg=failed");
  }
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});