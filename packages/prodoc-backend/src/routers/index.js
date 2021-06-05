'use strict';
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const booksRouter = require('./books.router');
const tokenGuard = require('../middlewares/token-guard');

module.exports = function (app) {

    app.use('/api', authRouter);

    app.use('/api/user', tokenGuard, userRouter);
    
    app.use('/api/books', tokenGuard, booksRouter);
    
};