const Router = require('express')
const authRules = require('../rules/auth.rules');
const AuthController = require('../controllers/auth.controller');
const userRouter = Router()

userRouter.post('/register', authRules['forRegister'], AuthController.register);

userRouter.post('/login', authRules['forLogin'], AuthController.login);


module.exports = userRouter;