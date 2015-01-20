var express = require('express');
var router = express.Router();

router.get('/rand', function(req, res) {
    
    res.send("" + (Math.random() * 10))
})

module.exports = router;
