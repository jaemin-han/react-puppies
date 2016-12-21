'use strict'
require('dotenv').config({ silent: true});
const express = require ('express');
const logger = require ('morgan');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const puppyRouter = require('./routes/puppies');
const PORT = process.argv[2] || process.env.port || 3000;


app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

app.use('/puppies', puppyRouter);

app.listen(PORT, () => console.log('oh it\'s running alright', PORT));
