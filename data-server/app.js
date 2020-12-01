//npx express-generator data-server --no-view  $ npm install mongoose --save $ npm install -D mocha chai chai-http $ npx create-react-app data-client
// npm install axios (Client) $ npm install cors -S (Server)


var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/datadb', {useNewUrlParser: true});

var indexRouter = require('./routes/index');
var dataRouter = require('./routes/data');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api/data', dataRouter);

module.exports = app;
