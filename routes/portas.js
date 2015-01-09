var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('portas', { title: 'My name is Pedro Portas' });
});

module.exports = router;