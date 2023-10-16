'use strict';

const express	= require('express');
const path		= require('path');
const jwt		= require('jsonwebtoken');
const c_template = require('./controller/template.js'); // TODO

var router = express.Router();

router.use(express.static(path.join(__dirname+'/view/')));

router.get('/template', function(req, res){
	res.sendFile(path.join(__dirname+'/view/template.html'))
})


// Authorization
router.use(function (req, res, next) {
	if(req.headers.authorization === 'SecureConnection'){
		console.log("Client is Authorized");
		next();
	} else {
		console.log("Client is not Authorized");
		res.status(404).send("Unauthorized Request");
	}
});

// API Routes
router.post('/api/createData', c_template.createData);
router.get('/api/readData', c_template.readData);
router.post('/api/updateData', c_template.updateData);

module.exports = router;