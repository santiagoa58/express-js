import express from "express";

const app = express();

function validateUser(_req, res, next) {
  res.locals.validated = true;
  console.log("VALIDATED RAN!");
  next();
}

// runs validateUser on all methods all paths
app.use(validateUser);
// runs validateUser on all methods on the /admin path
app.use("/admin", validateUser);
// runs validateUser on GET methods on the /admin path
app.get("/admin", validateUser);

app.get("/", (_req, res, _next) => {
  console.log(res.locals.validated ? "user is validated" : "invalid user!");
  res.send("<h1>Main Page</h1>");
});

app.get("/admin", (_req, res, _next) => {
  console.log(res.locals.validated ? "user is validated" : "invalid user!");
  res.send("<h1>Admin Page</h1>");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
