'use strict';

const db	= require('../db.js');

////////////////////////////////////////////////////////////////////////////////////////////////////////
// CREATE DATA
////////////////////////////////////////////////////////////////////////////////////////////////////////
function createDataDb(body, cb){	

	let name 		= body.name ? body.name : null;
	let reg_num		= body.reg_num ? body.reg_num : null;
	let dob			= body.dob ? body.dob : null;
	let department	= body.department ? body.department : null;

	let q = "INSERT INTO student (name, reg_num, dob, department) VALUES (?, ?, ?, ?);"

	let values = [name, reg_num, dob, department];

	db.query(q, values, function(err, data){
		if(err){
			cb(err, null);
		} else {
			cb(null, "Success");
		}
	});
}

exports.createData = function(body, cb){

	createDataDb(body, function(err, data){
		if(err){
			cb(err, null);
		} else {
			cb(null, data);
		}
	})
}
//////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////
// READ DATA
////////////////////////////////////////////////////////////////////////////////////////////////////////
function readDataDb(body, cb){

	let reg_num 		= body.reg_num ? body.reg_num : null;

	let q = "SELECT * FROM student WHERE reg_num = ?"

	let values = [reg_num];

	db.query(q, values, function(err, data){
		if(err){
			cb(err, null);
		} else {
			cb(null, data);
		}
	});
}

exports.readData = function(body, cb){

	readDataDb(body, function(err, data){
		if(err){
			cb(err, null);
		} else {
			cb(null, data);
		}
	})
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////
// UPDATE DATA
////////////////////////////////////////////////////////////////////////////////////////////////////////
function updateDataDb(body, cb){

	let id			= body.id ? body.id : null;
	let name 		= body.name ? body.name : null;
	let reg_num		= body.reg_num ? body.reg_num : null;
	let dob			= body.dob ? body.dob : null;
	let department	= body.department ? body.department : null;

	let q = "UPDATE student SET name ='" + name + "', reg_num = '"+ reg_num +"', dob = '"+ dob +"', "
			+ "department = '"+ department +"' WHERE id =" + id;

	let values = [name];

	db.query(q, values, function(err, data){
		if(err){
			cb(err, null);
		} else {
			cb(null, data);
		}
	});
}

exports.updateData = function(body, cb){

	updateDataDb(body, function(err, data){
		if(err){
			cb(err, null);
		} else {
			cb(null, data);
		}
	})
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////