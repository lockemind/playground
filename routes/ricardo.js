var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ricardo', function(req, res) {
    //res.send('Hello world')
    res.send({obj:'teste'})
    // res.send({ cenas : 'megas' })
});

module.exports = router;
