const acitivityService = require('../services/activity.service');
const acitivityTypeService = require('../services/activity-type.service');
const userService = require('../services/user.service');

const ActivityController = {

    /**
     * 
     * List all current user activities
     */
    async list(req, res) {

        try {

            const activities = await acitivityService.findAll(req.currentUser);

            res.status(200).send({ data: activities });

        } catch (err) {
            res.status(400).send({ error: true, msg: err.msg })

        }

    },

    /**
     * 
     * List all activities type
     */
    async listTypes(req, res) {
        try {

            const activitiesType = await acitivityTypeService.findAll();

            res.status(200).send({ data: activitiesType });

        } catch (err) {
            res.status(400).send({ error: true, msg: err.msg })

        }
    },

    /**
     * 
     * Create an user activity
     */
    async create(req, res) {

        try {
            const bodyParams = req.body;

            const activity = await acitivityService.create(bodyParams, req.currentUser);

            const activityType = await acitivityTypeService._fromID(bodyParams.typeId);

            await userService.addScore(req.currentUser, activityType.score);

            res.status(200).send({ data: activity });

        } catch (err) {
            res.status(400).send({ error: true, msg: err })

        }

    },


}

module.exports = ActivityController;
