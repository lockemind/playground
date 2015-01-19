var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/bouncing', function(req, res) {
  res.send(""+ Math.random() * 100);
});

module.exports = router;