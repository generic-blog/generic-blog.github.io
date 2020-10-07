const dashboardExpress = require("express");
const dashboardRouter = dashboardExpress.Router();

dashboardRouter.get("/", (req, res) => {
  res.json({
    msg: "Dashboard",
    status: 200,
  });
});

dashboardRouter.get("/servers", (req, res) => {
  res.json({
    msg: "Servers",
    status: 200,
  });
});

dashboardRouter.get("/config", (req, res) => {
  res.json({
    msg: "Settings",
    status: 200,
  });
});

dashboardRouter.get("/error", (req, res) => {
  res.json({
    msg: "Failure",
    status: 400,
  });
});

module.exports = dashboardRouter;
