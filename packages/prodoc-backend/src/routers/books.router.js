const Router = require('express')
const BookController = require('../controllers/book.controller');
const bookRouter = Router()

bookRouter.get('/', BookController.list);

bookRouter.get('/count-avaiable', BookController.countAvaiableBooks);

bookRouter.get('/my-books/:userId', BookController.listUserBooks);

bookRouter.get('/my-books/:userId/count', BookController.countUserBooks);

bookRouter.post('/', BookController.newBook);

bookRouter.post('/rent', BookController.rent);

bookRouter.post('/return', BookController.returnBook);

module.exports = bookRouter;