const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/", passport.authenticate("discord"));

router.get(
  "/redirect",
  passport.authenticate("discord", {
    failureRedirect: "/forbidden",
  }),
  (req, res) => {
    res.json({
      msg: "Success",
      status: 200,
    });
  }
);

router.get("/forbidden", (req, res) => {
  res.json({
    msg: "Forbidden",
    status: 403,
  });
});

// authRouter.get("/unauthorized", (req, res) => {
//   res.json({
//     msg: "Unauthorized",
//     status: 401,
//   });
// });

// authRouter.get("/success", (req, res) => {
//   res.json({
//     msg: "Success",
//     status: 200,
//   });
// });

module.exports = router;
