
const Sequelize = require('sequelize');
const db = require('../index');

const Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Student;

// add profile pictures later:
// default: https://i.imgur.com/lpkc7X4.png
// truman: https://i.imgur.com/lnf8zVz.jpg
// ellie: https://i.imgur.com/lqnFSvb.jpg
