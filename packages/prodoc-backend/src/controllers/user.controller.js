const userService = require('../services/user.service');

const UserController = {
    async me(req, res) {
        try {
            const user = await userService._fromID(req.currentUser.id);

            res.status(200).send({ data: user });
        } catch (err) {
            res.status(400).send({ error: true, msg: err.name })
        }
    }
}

module.exports = UserController;
