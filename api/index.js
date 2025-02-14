const express = require("express");

const app = express();

app.get("/", (req, res) => {
  const ip1 = req.headers["x-forwarded-for"];
  const ip2 = req.socket.remoteAddress;
  const ip3 = req.ip;
  res.send(`Your IP Is: ${ip1} ${ip2} ${ip3}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
