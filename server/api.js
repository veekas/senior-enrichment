'use strict';
const express = require('express');
const router = express.Router();
const db = require('../db');
// const { Students, Campuses } = require('../db/models');

router.use('/students', require('./routes/students.js'));
router.use('/campuses', require('./routes/campuses.js'));

router.use(function (err, req, res, next) {
	res.status(err.status || 500).send(err.message || 'internal error');
});

router.get('/hello', (req, res) => res.send({hello: 'world'}));

module.exports = router;
