var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/brito', function(req, res) {
    //res.send('Jose Brito is here!')
    res.send({obj:'Jose Brito is here'})
    //res.send({ cenas : 'megas' })
});

module.exports = router;
