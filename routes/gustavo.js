var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/box', function(req, res) {
    //res.send('Hello world')
    res.send("" + Math.random()*100)
    // res.send({ cenas : 'megas' })
});

module.exports = router;
