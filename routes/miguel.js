var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send("" + (Math.random() * 1000));
});

module.exports = router;