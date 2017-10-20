const Sequelize = require('sequelize');
const db = require('../index');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'https://i.imgur.com/JIdTj2o.png'
  }
}, {
  });

module.exports = Campus;
