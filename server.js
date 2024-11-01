const express = require("express");
const path = require("path");
const app = express();

const cacheDuration = 30 * 1000;

app.get("/image", (req, res) => {
  const now = new Date();
  const expires = new Date(now.getTime() + cacheDuration);

  res.set("Expires", expires.toUTCString());
  res.set("Last-Modified", now.toUTCString());

  res.sendFile(path.join(__dirname, "image.jpg"));
});

app.get("/image2", (req, res) => {
  const now = new Date();
  const expires = new Date(now.getTime() + cacheDuration);

  res.set("Expires", expires.toUTCString());
  res.set("Last-Modified", now.toUTCString());

  res.sendFile(path.join(__dirname, "image2.jpg"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
