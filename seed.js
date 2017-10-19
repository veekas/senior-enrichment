// This file should contain all the record creation needed to seed the database with its default values.
// The data can then be loaded with the node seed.js

const Promise = require("bluebird");
const {
  db,
  Campus,
  Student,
} = require('./db/models');

const campusData = [
  {
    name: 'dsfsdg',
    imageURL: 'http://www.lorempixel.com/200/200'
  },
  {
    name: 'thtyjtk',
    imageURL: 'http://www.lorempixel.com/200/200'
  },
  {
    name: 'ytjhgrth',
    imageURL: 'http://www.lorempixel.com/200/200'
  },
  {
    name: 'rgergre',
    imageURL: 'http://www.lorempixel.com/200/200'
  }
];

const studentData = [
  {
    name: 'fdvkjdnv fdjnv',
    campusId: 1,
    major: 'efww',
    email: 'erkdsjgoz@gmail.com'
  },
  {
    name: 'dfknb fdbnd',
    campusId: 2,
    major: 'Mwefwef',
    email: 'kdsjgoz@gmail.com'
  },
  {
    name: 'gmto ormgoier',
    campusId: 2,
    major: 'Ewefwef',
    email: 'tkdsjgoz@gmail.com'
  },
  {
    name: 'wef obot',
    campusId: 3,
    major: 'efefg',
    email: 'chrkdsjgoz@gmail.com'
  },
  {
    name: 'vkjdfnv def',
    campusId: 4,
    major: 'wefwef',
    email: 'rykdsjgoz@gmail.com'
  },
  {
    name: 'dd asodmaodf',
    campusId: 1,
    major: 'wefwef',
    email: 'sunkdsjgoz@gmail.com'
  }
];

// Students Seeding
const promiseArrStudents = () => {
  return studentData.map(student => {
    return Student.build(student);
  });
};

const createStudents = () => {
  return Promise.map(promiseArrStudents(), function (student) {
    return student.save();
  });
};

// Campus Seeding
const promiseArrCampus = () => {
  return campusData.map(campus => {
    return Campus.build(campus);
  });
};

const createCampuses = () => {
  return Promise.map(promiseArrCampus(), function (campus) {
    return campus.save();
  });
};

const seed = () => {
  return createCampuses()
    .then(() => createStudents());
};

db.sync({ force: true })
  .then(function () {
    console.log('no data');
    return seed();
  })
  .then(function () {
    console.log('new data');
  })
  .catch(function (err) {
    console.error('problem', err, err.stack);
  })
  .finally(function () {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log('connection closed'); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
