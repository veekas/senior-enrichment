'use strict';
const Sequelize = require('sequelize');
const db = require('../db');

module.exports = db.define('student', {
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
}, {
    getterMethods: {
      name() {
        return `${this.first_name} ${this.last_name}`;
      }
    }
  });
