const bookService = require('../services/book.service');

const BookController = {

    async list(req, res) {
        try {
            const books = await bookService.listAll();

            res.status(200).send({ data: books });
        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },

    async rent(req, res) {
        try {
            const { bookId, userId } = req.body;
            const book = await bookService.rent(bookId, userId );
            
            if (!book) {
                res.status(400).send({ error: true, msg: err.name });
            }
            
            res.status(200).send();
        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    },

    async returnBook(req, res) {
        try {
            const { bookId } = req.body;
            const book = await bookService.returnBook(bookId);
            
            if (!book) {
                res.status(400).send({ error: true, msg: err.name });
            }
            
            res.status(200).send();
        } catch (err) {
            res.status(400).send({ error: true, msg: err.name });
        }
    }
}

module.exports = BookController;
