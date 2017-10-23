'use strict';
const api = require('express').Router();

api.use('/campus', require('./campus'));
api.use('/student', require('./student'));

module.exports = api;
