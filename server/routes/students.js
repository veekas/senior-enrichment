

const routes = require('express').Router();
const { Students } = require('../../db/models');

// GET - all students

routes.get('/', (req, res, next) => {
  Students.findAll({
    include: [{ all: true }]
  })
    .then(students => {
      res.json(students);
    })
    .catch(next);
});

// POST - new student

routes.post('/', (req, res, next) => {
  Students.create(req.body)
    .then((campus) => {
      console.log('Post', campus.data);
      res.json(campus);
    })
    .catch(next);
});

// GET - a student by id

routes.get('/:id', (req, res, next) => {
  const studentId = req.params.id;
  Students.findAll({ where: { id: StudentId } })
    .then(result => {
      res.json(result);
    })
    .catch(next);
});

// PUT - updated student info for one student

routes.put('/:id', (req, res, next) => {
  const studentId = req.params.id;
  Students.update(req.body, {
    where: { id: studentId }, returning: true
  })
    .then((campus) => {
      res.json(campus);
    })
    .catch(next);
});

// DELETE - a student

routes.delete('/:id', (req, res, next) => {
  const studentId = req.params.id;
  Students.destroy({ where: { id: studentId }, returning: true })
    .then((result) => {
      res.json(result);
    })
    .catch(next);
});

module.exports = routes;
