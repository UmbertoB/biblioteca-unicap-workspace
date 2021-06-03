const Router = require('express')
const DegreeController = require('../controllers/degree.controller');
const degreeRouter = Router()

degreeRouter.get('/', DegreeController.list);

degreeRouter.get('/types', DegreeController.listTypes);

degreeRouter.post('/', DegreeController.create);

degreeRouter.delete('/:id/delete', DegreeController.delete);

module.exports = degreeRouter;