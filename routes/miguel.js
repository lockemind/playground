var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/miguel', function(req, res) {
  res.send('Leite', { title: "I'm allways Leite" });
});

module.exports = router;