import fs from "fs";
import http from "http";
const port = 53134;

http
  .createServer((req, res) => {
    let responseCode: number = 404;
    let content: string | Buffer = "404 Error";

    if (req.url === "/") {
      responseCode = 200;
      content = fs.readFileSync("./index.html");
    }

    res.writeHead(responseCode, {
      "content-type": "text/html;charset=utf-8",
    });

    res.write(content);
    res.end();
  })
  .listen(port);
