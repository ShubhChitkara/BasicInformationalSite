const httpmodule = require('http');
const fs = require('fs');
const url = require('url');

httpmodule.createServer((req, res) =>{
    if (req.url == "/about") {
        fs.readFile("about.html", (err, data) => {
          if (err) throw err;
          else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
          }
        });
      } else if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.readFile("index.html", (err, data) => {
          if (err) throw err;
          else {
            res.end(data);
          }
        });
      } else if (req.url == "/contact-me") {
        fs.readFile("contact-me.html", (err, data) => {
          if (err) throw err;
          else {
            res.end(data);
          }
        });
      } else {
        fs.readFile("404.html", (err, data) => {
          if (err) throw err;
          else {
            res.end(data);
          }
        });
      }
    })
    .listen(8080);
