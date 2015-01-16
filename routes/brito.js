var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    //res.send('Jose Brito is here!')
    //res.send({obj:'Jose Brito is here'})
    //res.send({ cenas : 'megas' })
    res.send("" + (Math.random() * 10));
});

module.exports = router;
