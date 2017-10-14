'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING // url link? not sure
  }
});
