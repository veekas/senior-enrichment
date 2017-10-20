'use strict';

var db = require('../index');
var Sequelize = require('sequelize');
const Student = require('./student');
const Campus = require('./campus');

Student.belongsTo(Campus);

Campus.hasMany(Student, {
	onDelete: 'cascade',
	hooks: true
});

module.exports = {
	db,
	Student,
	Campus
};
