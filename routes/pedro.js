var express = require('express');
var router = express.Router();

router.get('/colorCycle', function(req, res) {

    var color = "#"+Date.now().toString().slice(7,13)
	res.send({color: color});
});

module.exports = router;
