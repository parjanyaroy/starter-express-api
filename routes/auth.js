const express = require('express')
const router = express.Router()

router.get("/login", (req, res) => {
  res.render('login.ejs');
});

router.post("/login", (req, res) => {
  const { name, password  } = req.body;
  console.log(name, password);
});

router.get("/register", (req, res) => {
  res.render("register.ejs");
});

router.post("/register", (req, res) => {
  const { name, email, pass, re_pass } = req.body;
  console.log(name, email, pass, re_pass);
});

module.exports = router