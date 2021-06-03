const userService = require('../services/user.service');
const roleService = require('../services/role.service');

const UserController = {

    async me(req, res) {

        try {

            const user = await userService._fromID(req.currentUser.id);

            res.status(200).send({ data: user });

        } catch (err) {
            res.status(400).send({ error: true, msg: err.name })

        }

    },

    async promotion(req, res) {

        try {

            const user = await userService._fromID(req.currentUser.id);

            const newRole = await roleService._fromID(user.roleId + 1);

            if (user.score >= newRole.scoreNeeded && user.Degrees && user.Degrees[0] && user.Degrees[0].typeId >= newRole.degreeNeeded) {
                await userService.changeRole(user.id, newRole.id);
                res.status(200).send({ data: await userService._fromID(req.currentUser.id) })
            } else {
                res.status(400).send({ error: true, msg: 'Você não possui os critérios necessários para subir de cargo' })
            }


        } catch (err) {
            res.status(400).send({ error: true, msg: err.name })
        }

    },

    async getNextRole(req, res) {

        try {

            const user = await userService._fromID(req.currentUser.id);

            const nextRole = await roleService._fromID(user.roleId + 1);

            res.status(200).send({ data: nextRole })


        } catch (err) {
            res.status(400).send({ error: true, msg: err.name })
        }

    }



}

module.exports = UserController;
