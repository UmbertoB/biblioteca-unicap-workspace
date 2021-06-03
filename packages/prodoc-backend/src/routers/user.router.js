const Router = require('express')
const UserController = require('../controllers/user.controller');
const userRouter = Router()

userRouter.get('/me', UserController.me);

userRouter.post('/promotion', UserController.promotion);

userRouter.get('/next-role', UserController.getNextRole);

module.exports = userRouter;