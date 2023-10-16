$(document).ready(function () {

// Create Student Data
$('.student-data').on('click','#createData',function(e){
	e.preventDefault();

	var body = {
		name: $("#name").val(),
		reg_num: $("#reg_num").val(),
		dob: $("#dob").val(),
		department: $("#department").val()
	}

	$.ajax({
		type: "POST",
		url: "api/createData",
		crossDomain: true,
		headers: {'Authorization':'SecureConnection'},
		contentType: "application/json; character=utf-8",
		data: JSON.stringify(body),
	}).done(function (data){
		alert("Inserted Successfully")
	}).fail(function (data) {
		alert("Insertion Failed")
	})
});


// Read Student Data
$('.student-data').on('click','#readData',function(e){
	e.preventDefault();

	var body = {
		reg_num: $("#reg_num").val(),
	}

	$.ajax({
		type: "POST",
		url: "api/readData",
		crossDomain: true,
		headers: {'Authorization':'SecureConnection'},
		contentType: "application/json; character=utf-8",
		data: JSON.stringify(body),
	}).done(function (data){
		//window.location.href = "/template2"
		console.log(data[0].department);
		$('#id').val(data[0].id);
		$('#name').val(data[0].name);
		$('#dob').val(data[0].dob);
		$('#department').val(data[0].department);
	}).fail(function (data) {
		alert("Read Failed")
	})
});


// Update Student Data
$('.student-data').on('click','#updateData',function(e){
	e.preventDefault();

	var body = {
		id: $("#id").val(),
		name: $("#name").val(),
		reg_num: $("#reg_num").val(),
		dob: $("#dob").val(),
		department: $("#department").val()
	}

	$.ajax({
		type: "POST",
		url: "api/updateData",
		crossDomain: true,
		headers: {'Authorization':'SecureConnection'},
		contentType: "application/json; character=utf-8",
		data: JSON.stringify(body),
	}).done(function (data){
		alert("Updated Successfully");
	}).fail(function (data) {
		alert("Update Failed");
	})
});

});