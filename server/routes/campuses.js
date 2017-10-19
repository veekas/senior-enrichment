

const routes = require('express').Router();
const { Campuses } = require('../../db/models');

// GET - all campuses

routes.get('/', (req, res, next) => {
  Campuses.findAll()
    .then(campuses => {
      res.json(campuses);
    })
    .catch(next);
});

// GET - a campus by id

routes.get('/:id', (req, res, next) => {
  const campusId = req.params.id;
  Campuses.findAll({ where: { id: campusId } })
    .then(campus => {
      res.json(campus);
    })
    .catch(next);
});

// POST - new campus

routes.post('/', (req, res, next) => {
  Campuses.create(req.body)
    .then((campus) => {
      res.json(campus);
    })
    .catch(next);
});

// PUT - updated campus info for one campus

routes.put('/:id', (req, res, next) => {
  const campusId = req.params.id;
  Campuses.update(req.body, { where: { id: campusId }, returning: true })
    .then((campus) => {
      res.json(campus);
    })
    .catch(next);
});

// DELETE - a campus

routes.delete('/:id', (req, res, next) => {
  const campusId = req.params.id;
  Campus.destroy({ where: { id: campusId } })
    .then((campus) => {
      res.json(campus);
    })
    .catch(next);
});

module.exports = routes;
