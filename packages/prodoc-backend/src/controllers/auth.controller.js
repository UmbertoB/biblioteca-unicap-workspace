const validationResult = require('express-validator/check')['validationResult'];
const authService = require('../services/auth.service');
const logger = require('heroku-logger')

const AuthController = {

    async register(req, res) {

        try {
            const bodyParams = req.body;
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(422).json(errors.array());
            }

            const user = await authService.createUser({...bodyParams, type: 'Aluno' });

            res.status(200).send({ user });

        } catch (err) {
            logger.info(err)
            res.status(400).send({ error: true, msg: err.name })

        }

    },

    async login(req, res) {

        try {
            const bodyParams = req.body;
            const errors = validationResult(req);
    
            if (!errors.isEmpty()) {
                return res.status(401).json(errors[0]);
            }
    
            const token = await authService.login(bodyParams.email);
    
            res.status(200).send({ token });
        } catch(e) {
            console.log(e)
            res.status(400).send(e)
        }
    },


}

module.exports = AuthController;
