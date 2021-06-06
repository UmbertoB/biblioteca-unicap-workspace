const userService = require('../services/user.service');

const UserController = {
    async me(req, res) {
        try {
            res.status(200).send({ data: req.currentUser });
        } catch (err) {
            res.status(400).send({ error: true, msg: err.name })
        }
    }
}

module.exports = UserController;
