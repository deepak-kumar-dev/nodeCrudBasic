const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.get("/about", (req, res) => {
  res.send("It`s About Page");
});

module.exports = router;