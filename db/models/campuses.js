'use strict';
const Sequelize = require('sequelize');
const db = require('../index');

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '.../public/images/school.png'
  }
});

module.exports = Campuses;
