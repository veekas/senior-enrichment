

const Sequelize = require('sequelize');
const db = require('../index');

const Students = db.define('students', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  profile_picture: {
    type: Sequelize.STRING,
    defaultValue: '.../public/images/kids-playing-wh.png'
  }
}, {
    getterMethods: {
      name() {
        return `${this.first_name} ${this.last_name}`;
      }
    }
  });

module.exports = Students;
