const Router = require('express')
const ActivityController = require('../controllers/activity.controller');
const activityRouter = Router()

activityRouter.get('/', ActivityController.list);

activityRouter.get('/types', ActivityController.listTypes);

activityRouter.post('/', ActivityController.create);

module.exports = activityRouter;