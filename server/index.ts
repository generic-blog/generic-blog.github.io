const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

const authRoute = require("./routes/auth");
const dashboardRoute = require("./routes/dashboard");

app.use("/auth", authRoute);
app.use("/dashboard", dashboardRoute);

app.get("/", (req, res) => {
  res.json({
    msg: "Hello!",
    status: 200,
  });
});

app.listen(port, () => {
  console.log(`Now listening to requests from port ${port}`);
});
