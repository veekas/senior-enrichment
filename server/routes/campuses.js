const router = require('express').Router();
const { Campuses } = require('../../db/models');

// GET - all campuses

router.get('/', (req, res, next) => {
  Campuses.findAll()
    .then(campuses => {
      res.json(campuses);
    })
    .catch(next);
});

// GET - a campus by id

router.get('./:campusId', (req, res, next) => {
  res.json(req.campuses);
});

// POST - new campus

router.post('/', (req, res, next) => {
  Campuses.findOrCreate({
    where: {
      name: req.body.name
    }
  })
    .spread((campus, created) => {
      created ? res.json(campus) : res.send('This campus already exists.');
    });
});

// PUT - updated campus info for one campus

router.put('./campusId', (req, res, next) => {
  req.campus
    .update(res.body)
    .then(campus => res.json(campus))
    .catch(next);
});

// DELETE - a campus

router.put('./studentId', (req, res, next) => {
  req.campus
    .destroy()
    .then(() => res.status(204).send('Campus has been deleted from the database'));
});

module.exports = Campuses;
