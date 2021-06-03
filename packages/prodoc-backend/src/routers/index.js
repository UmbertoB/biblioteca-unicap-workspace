'use strict';
const authRouter = require('./auth.router');
const activityRouter = require('./activity.router');
const userRouter = require('./user.router');
const degreeRouter = require('./degree.router');
const tokenGuard = require('../middlewares/token-guard');

module.exports = function (app) {

    app.use('/api', authRouter);

    app.use('/api/user', tokenGuard, userRouter);
    
    app.use('/api/activity', tokenGuard, activityRouter);
    
    app.use('/api/degree', tokenGuard, degreeRouter);
    
};