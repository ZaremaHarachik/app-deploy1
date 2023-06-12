const path = require("path");
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "/build")));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
    res.send("aaohla amigo!!!");
});

app.get("/Zarema", (req, res) => {
    res.send("Hiiii!!!");
});





app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));