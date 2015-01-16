var express = require('express');
var router = express.Router();

var xPosition = 0
var yPosition = 0
var color = 0x000000

/* GET users listing. */
router.get('/cycle', function(req, res) {

	xPosition++
	yPosition++  	
	color++

	if (xPosition == 100) {
		xPosition = 0
		yPosition = 0
		color = 0x000000
	}

	res.send({x: xPosition, y: yPosition, color: color});
});

module.exports = router;
