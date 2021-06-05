const Router = require('express')
const UserController = require('../controllers/user.controller');
const userRouter = Router()

userRouter.get('/me', UserController.me);

module.exports = userRouter;