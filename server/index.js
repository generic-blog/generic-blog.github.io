const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const session = require("express-session");
const passport = require("passport");
// const discordStrategy = require("./strategies/discord");
// const db = require("./database/database");

// db.then(() => {
//   console.log("Connected");
// }).catch((err) => console.log(err));

const authRoute = require("./routes/auth");
// const dashboardRoute = require("./routes/dashboard");

app.use(
  session({
    secret: "thearchive",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);
// app.use("/dashboard", dashboardRoute);

app.get("/", (req, res) => {
  res.json({
    msg: "Hello!",
    status: 200,
  });
});

app.listen(port, () => {
  console.log(`Now listening to requests from port ${port}`);
});
