var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

  res.send({name:'Pedro', surname:'Amaral'});

});

module.exports = router;
