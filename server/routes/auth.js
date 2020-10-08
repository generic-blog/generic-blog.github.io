const authExpress = require("express");
const authRouter = authExpress.Router();
const authPassport = require("passport");

authRouter.get("/", authPassport.authenticate("discord"));

authRouter.get(
  "/redirect",
  authPassport.authenticate("discord", {
    failureRedirect: "/forbidden",
  }),
  (req, res) => {
    res.send(200);
  }
);

authRouter.get("/forbidden", (req, res) => {
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

module.exports = authRouter;
