const degreeService = require('../services/degree.service');
const degreeTypeService = require('../services/degree-type.service');
const userService = require('../services/user.service');

const DegreeController = {

    async list(req, res) {

        try {

            const degree = await degreeService.findAll(req.currentUser);

            res.status(200).send({ data: degree });

        } catch (err) {
            res.status(400).send({ error: true, msg: err.msg })

        }

    },

    async listTypes(req, res) {
        try {

            const degreeTypes = await degreeTypeService.findAll();

            res.status(200).send({ data: degreeTypes });

        } catch (err) {
            res.status(400).send({ error: true, msg: err.msg })
        }
    },

    async create(req, res) {

        try {
            const bodyParams = req.body;

            const degree = await degreeService.create(bodyParams, req.currentUser);

            res.status(200).send({ data: degree });

        } catch (err) {
            res.status(400).send({ error: true, msg: err })

        }

    },

    async delete(req, res) {

        try {
            const { id } = req.params;

            const degree = await degreeService.delete(id);

            res.status(200).send({ data: degree });

        } catch (err) {
            res.status(400).send({ error: true, msg: err })

        }

    },


}

module.exports = DegreeController;
