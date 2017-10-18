'use strict';

const chalk = require('chalk');
const pkg = require('./package.json');

const nameError = pkg.name;

const reasonableName = /^[\w\-]+$/;
if (!reasonableName.test(pkg.name)) {
  console.error(chalk.red(nameError));
}

module.exports = pkg;
