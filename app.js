const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookiePaser = require('cookie-parser');
const logger = require('morgan');
var favicon = require('serve-favicon');
var multer = require("multer");

const app = express();

const todoService=require('./router/TodoService');
const uploadService = require('./router/uploadService');

// Setting View Templete
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// setting bodypaser and favicon to load icon
 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookiePaser());
app.use(express.static(path.join(__dirname,'public'))); 

//calling from router
var upload = multer({ dest: 'upload/' });


app.use('/todo',todoService);
app.use('/',uploadService);


module.exports = app;