'use strict';

const express   	= require('express');
const app			= express()
const routes		= require('./routes.js')
const body_parser	= require('body-parser')
const cors			= require('cors')
const fs			= require('fs')
const compression	= require('compression')
const http			= require('http')

app.use(cors());

app.use(body_parser.json());

app.use(compression({threshold:0}));

app.use('/', routes);

http.createServer(app).listen(8000, function(){
	console.log("Server is listening on port 8000....");
})