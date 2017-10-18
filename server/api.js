'use strict';

const api = require('express').Router();
const { Campuses, Students } = require('../db/models');

api.use('/students', require('./routes/students.js'));
api.use('/campuses', require('./routes/campuses.js'));

api.use(function (err, req, res, next) {
	res.status(err.status || 500).send(err.message || 'internal error');
});

module.exports = api;
