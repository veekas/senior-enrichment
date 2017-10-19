'use strict';

/* use the random puppy generator
https://www.npmjs.com/package/random-puppy
*/

const db = require('./db');
const Campuses = require('./db/models/campuses');
const Students = require('./db/models/students');

const students = [
  { first_name: 'veekas', last_name: 'shrivastava', email: 'some1@email.com', campusId: 1 },
  { first_name: 'erin', last_name: 'hellmann', email: 'some2@email.com', campusId: 2 },
  { first_name: 'truman', last_name: 'osito', email: 'some3@email.com', campusId: 1 },
  { first_name: 'eleanor', last_name: 'amy', email: 'some4@email.com', campusId: 2 }
];

const campuses = [{
  name: 'tempe',
}, {
  name: 'phoenix',
}];


const seed = () =>
  Promise.all(campuses.map(campus =>
    Campuses.create(campus))
  )
    .then(() =>
      Promise.all(students.map(student =>
        Students.create(student))
      )
    );

(() => {
  console.log('Syncing the database...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding the database...');
      return seed();
    })
    .catch(err => {
      console.log('Seed did not complete successfully');
      console.log(err.stack);
    })
    .then(() => {
      console.log('Database successfully seeded.');
      db.close();
      return null;
    });
})();
