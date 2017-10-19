

const api = require('express').Router();

api.use('/students', require('./routes/students.js'));
api.use('/campuses', require('./routes/campuses.js'));

api.use(function (err, req, res, next) {
	res.status(err.status || 500).send(err.message || 'There is a server-side issue.');
});

module.exports = api;
