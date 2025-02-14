const express = require("express");
const checkIpAddress = require("../middleware/ipWhitelisting.middleware");

const app = express();
app.use(checkIpAddress);

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"];
  res.send(`Your IP Is: ${ip}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
