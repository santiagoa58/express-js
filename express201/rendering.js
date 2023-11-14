import express from "express";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

// The __filename and __dirname variables are not available in ES6 modules.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
