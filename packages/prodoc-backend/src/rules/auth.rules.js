const bcrypt = require('bcryptjs');
const check = require('express-validator/check').check;
const database = require('../database')
const logger = require('heroku-logger')

const userRules = {
  forRegister: [

    check('email')
      .isEmail().withMessage('Formato de email inválido')
      .custom(async email => { 
        let users = [];
        try { 
          users = await database('users').where('email', '=', email);
        } catch(e) {
          logger.info(e); 
        }
        return users.length < 1 
      }).withMessage('Este email já está cadastrado'),

    check('confirm_password')
      .custom((confirm_password, { req }) => req.body.password === confirm_password).withMessage('As senhas são diferentes')

  ],
  forLogin: [
    check('email')
      .isEmail().withMessage('Formato de Email Inválido')
      .custom(email => database('users').where('email', '=', email).then(user => !!user)).withMessage('Email ou Senha inválido'),

    check('password')
      .custom((password, { req }) => database('users').where('email', '=', req.body.email)
          .then(user => bcrypt.compareSync(password, user ? user[0].password : ''))).withMessage('Email ou Senha inválido')
  ]
}

module.exports = userRules;