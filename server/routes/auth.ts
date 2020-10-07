const authExpress = require("express");
const authRouter = authExpress.Router();

authRouter.get("/", (req, res) => {
  res.json({
    msg: "Authorized",
    status: 100,
  });
});

authRouter.get("/redirect", (req, res) => {
  res.send(200);
});

authRouter.get("/failure", (req, res) => {
  res.json({
    msg: "Failure",
    status: 400,
  });
});

authRouter.get("/unauthorized", (req, res) => {
  res.json({
    msg: "Unauthorized",
    status: 401,
  });
});

authRouter.get("/success", (req, res) => {
  res.json({
    msg: "Success",
    status: 200,
  });
});

module.exports = authRouter;
