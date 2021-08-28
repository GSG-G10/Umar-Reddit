require('dotenv').config();

const { join } = require('path');

const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const app = express();

app.disabled('x-powered-by');

app.set('port', process.env.PORT || 8080);

app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'Public')));

module.exports = app;
