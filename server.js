
	// inclue 'http' module
	var http = require('http');
	
	//include 'json2csv' so that it converts json into csv with column titles and proper line endings
	var json2csv = require('json2csv').parse;

	//CORS-Cross Origin Resource Sharing
	//include 'cors' which provides a Connect/Express middleware
	var cors = require('cors');


	//express is a module that can be used to create more than one application
	var express = require('express');

	var app = express();
	
	// body parsing middleware
	const bodyParser = require("body-parser");
	
	var cors = require('cors');
	
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cors());
	
	var myemp=require('./Employee.js');

	// Append new Employee Details to data.csv
	myemp.mypost(app);
	
	// Fetch Employee Details from data.csv	
	myemp.myget(app);


	var port = 5000;

	app.listen(port,  () => console.log('Example app listening on port '+port));

