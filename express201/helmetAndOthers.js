import express from "express";
import helmet from "helmet";
const app = express();
/**
 * Helmet is a middleware for Express.js that helps secure web applications by setting various HTTP headers.
 * It provides protection against common security vulnerabilities such as cross-site scripting (XSS), clickjacking, and other code injection attacks.
 * We need Helmet to enhance the security of our web application by adding an extra layer of protection to our server.
 */
app.use(helmet());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.json(["Test", "123"]);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
