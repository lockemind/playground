var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/gustavo', function(req, res) {
    //res.send('Hello world')
    res.send({obj:'http://wwww.gustavo.com/'})
    // res.send({ cenas : 'megas' })
});

module.exports = router;
