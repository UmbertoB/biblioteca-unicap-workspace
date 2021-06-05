const bcrypt = require('bcryptjs');
const check = require('express-validator/check').check;
const db = require('../database/models');

const userRules = {
  forRegister: [],
  forLogin: []
}

module.exports = userRules;