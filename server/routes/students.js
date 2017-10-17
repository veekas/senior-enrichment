const router = require('express').Router();
const { Students } = require('../../db/models');

// GET - all students

router.get('/', (req, res, next) => {
  Students.findAll()
    .then(students => res.json(students))
    .catch(next);
});

// GET - a student by id
// makes more sense to check for student first before get

router.get('/:studentId', (req, res, next) => {
  res.json(req.students);
});

// POST - new student

router.post('/', (req, res, next) => {
  Students.findOrCreate({
    where: {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    } // how to get campusId in here?
  })
    .spread((student, created) => {
      created ? res.json(student) : res.send('This student already exists.');
    });
});

// PUT - updated student info for one student

router.put('./:studentId', (req, res, next) => {
  req.student
    .update(res.body)
    .then(student => res.json(student))
    .catch(next);
});

// DELETE - a student

router.put('./:studentId', (req, res, next) => {
  req.student
    .destroy()
    .then(() => res.status(204).send('Student has been deleted from the database.').end())
    .catch(next);
});

module.exports = Students;
