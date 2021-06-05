const Router = require('express')
const BookController = require('../controllers/book.controller');
const bookRouter = Router()

bookRouter.get('/', BookController.list);

bookRouter.post('/rent', BookController.rent);

bookRouter.post('/returnBook', BookController.returnBook);

module.exports = bookRouter;