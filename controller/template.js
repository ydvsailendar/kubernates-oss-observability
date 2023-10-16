'use strict'

const m_template = require('../model/template.js');

// Create Data
exports.createData = function(req, res){

	let body = req.body;

	console.log(body);

	m_template.createData(body, function(err, data){
		if(err){
			res.send(err);
		} else {
			res.send(data);
		}
	});
}

// Read Data
exports.readData = function(req, res){

	let body = req.body;

	m_template.readData(body, function(err, data){
		if(err){
			res.send(err);
		} else {
			res.send(data);
		}
	});
}

// Update Data
exports.updateData = function(req, res){

	let body = req.body;

	m_template.updateData(body, function(err, data){
		if(err){
			res.send(err);
		} else {
			res.send(data);
		}
	});
}