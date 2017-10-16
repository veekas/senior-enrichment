const router = require('express').Router();
const { Students } = require('../../db/models');

// GET - all students

router.get('/', (req, res, next) => {
  Students.findAll({})
    .then(students => res.json(students))
    .catch(next);
});

// GET - a student by id



// POST - new student



// PUT - updated student info for one student



// DELETE - a student



module.exports = Students;
