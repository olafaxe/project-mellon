const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.static("views/public"));
app.use(
  express.urlencoded({
    extended: true
  })
);

let db;

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.post("/", (req, res) => {
  setTimeout(function() {
    res.render("pages/main.ejs");
  }, 500);
});

app.listen(port, () => {
  console.log(`Lyssnar på port: ${port}`);
});
