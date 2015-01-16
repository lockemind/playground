var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/huhuu', function(req, res) {
    res.send('just a string')
});

module.exports = router;