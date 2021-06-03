const validationResult = require('express-validator/check')['validationResult'];
const authService = require('../services/auth.service');

const AuthController = {

    async register(req, res) {

        try {
            const bodyParams = req.body;
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(422).json(errors.array());
            }

            const user = await authService.createUser(bodyParams);

            res.status(200).send({ user });

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name })

        }

    },

    async login(req, res) {
        const bodyParams = req.body;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(401).json(errors[0]);
        }

        const token = await authService.login(bodyParams.email);

        res.status(200).send({ token });
    },


}

module.exports = AuthController;
