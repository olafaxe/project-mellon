const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGODB_URI || "mongodb://localhost:27017";
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set("view engine", "ejs");

app.use(express.static("views/public"));
app.use(
  express.urlencoded({
    extended: true
  })
);

let db;

client.connect(function(err) {
  if (err) throw err;
  db = client.db("heroku_08126dh9");
});

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/bye", (req, res) => {
  res.render("pages/index");
});

app.post("/", (req, res) => {
  const reguser = req.body.reguser;
  const regemail = req.body.regemail;
  const regpassword = req.body.regpassword;
  const regpasswordrep = req.body.regpasswordrep;

  const usersCollection = db.collection("users");
  if (
    reguser === "" ||
    regemail === "" ||
    regpassword === "" ||
    regpassword != regpasswordrep
  ) {
    return;
  }
  res.render("pages/index.ejs", { reguser });
  usersCollection.insertMany([
    { user: reguser, email: regemail, password: regpassword }
  ]);
});

app.post("/main", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const usersCollection = db.collection("users");

  usersCollection.find({}).toArray(function(err, users) {
    users.forEach(e => {
      if (username === e.user && password === e.password) {
        res.render("pages/main.ejs", { username, email, password });
      } else {
        return;
      }
      console.log(e.user);
    });
  });
});

app.listen(port, () => {
  console.log(`Lyssnar på port: ${port}`);
});
