'use strict';

const Sequelize = require('sequelize');
const db = require('../index');

const Students = db.define('students', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  profile_picture: {
    type: Sequelize.STRING,
    defaultValue: '.../public/images/kids-playing-wh.png'
  } // add a campus thing here, or do I add it as a query in the model
}, {
    getterMethods: {
      name() {
        return `${this.first_name} ${this.last_name}`;
      }
    }
  });

module.exports = Students;
