const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // This callback function is executed every time a request is made to the server
  console.log(`request path: ${req.url}`);
  switch (req.url) {
    case "/":
      const homePage = fs.readFileSync(path.join(`${__dirname}/node.html`));
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homePage);
      res.end();
      break;
    case "/node-logo.png":
      const image = fs.readFileSync(
        path.join(`${__dirname}/public/node-logo.png`)
      );
      res.writeHead(200, { "content-type": "image/png" });
      res.write(image);
      res.end();
      break;
    case "/styles.css":
      const stylesheet = fs.readFileSync(
        path.join(`${__dirname}/public/styles.css`)
      );
      res.writeHead(200, { "content-type": "text/css" });
      res.write(stylesheet);
      res.end();
      break;
    default:
      const NotFoundPage = fs.readFileSync(path.join(`${__dirname}/404.html`));
      res.writeHead(404, { "content-type": "text/html" });
      res.write(NotFoundPage);
      res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
