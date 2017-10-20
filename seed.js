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
    name: 'Tempe'
  },
  {
    name: 'Scottsdale'
  },
  {
    name: 'Phoenix'
  },
  {
    name: 'Chandler'
  }];

const studentData = [
  {
    name: 'Veekas Shrivastava',
    campusId: 1,
    email: 'veekas.shrivastava@fakemail.com'
  },
  {
    name: 'Erin Hellmann',
    campusId: 2,
    email: 'erin.hellmann@fakemail.com'
  },
  {
    name: 'Truman Osito',
    campusId: 2,
    email: 'truman.osito@fakemail.com'
  },
  {
    name: 'Eleanor Amy',
    campusId: 3,
    email: 'eleanor.amy@fakemail.com'
  },
  {
    name: 'Shivani Shrivastava',
    campusId: 4,
    email: 'shivani.shrivastava@fakemail.com'
  },
  {
    name: 'Jenny Hellmann',
    campusId: 1,
    email: 'jenny.hellmann@fakemail.com'
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
