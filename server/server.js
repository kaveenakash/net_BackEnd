const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  //Set header content type
  res.setHeader("content-type", "text/html");

  let path = "../views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    default:
      path += "404.html";
      break;
  }

  //Send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }

    // res.write(data)
    res.end(data);
  });
});

server.listen(3000, "localhost", () => {
  console.log("listen for requests on port 3000");
});
