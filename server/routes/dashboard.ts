const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    msg: "Dashboard",
    status: 200,
  });
});

router.get("/servers", (req, res) => {
  res.json({
    msg: "Servers",
    status: 200,
  });
});

router.get("/config", (req, res) => {
  res.json({
    msg: "Settings",
    status: 200,
  });
});

router.get("/error", (req, res) => {
  res.json({
    msg: "Failure",
    status: 400,
  });
});

module.exports = router;
