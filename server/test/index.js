const http = require("http");
const fs = require("fs");
const url = require("url");
const fetch = require("node-fetch");

const port = 3000;

http
  .createServer((req, res) => {
    let responseCode = 404;
    let content = "404 Error";

    const urlObj = url.parse(req.url, true);

    if (urlObj.query.code) {
      const accessCode = urlObj.query.code;
      const data = {
        client_id: "705098009645678613",
        client_secret: "FxRSsAXAulvhiFVB9GWS9MlCYvVsbl1-",
        grant_type: "authorization_code",
        redirect_uri: "/public",
        code: accessCode,
        scope: ["identify", "guilds"],
      };

      fetch("https://discord.com/api/oauth2/token", {
        method: "POST",
        body: new URLSearchParams(data),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
        .then((discordRes) => discordRes.json())
        .then((info) => {
          console.log(info);
          return info;
        })
        .then((info) =>
          fetch("https://discord.com/api/users/@me", {
            headers: {
              authorization: `${info.token_type} ${info.access_token}`,
            },
          })
        )
        .then((userRes) => userRes.json())
        .then(console.log);
    }

    if (urlObj.pathname === "/") {
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
