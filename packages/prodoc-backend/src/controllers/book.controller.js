const bookService = require('../services/book.service');

const BookController = {

    async list(req, res) {
        try {
            const books = await bookService.listAll();

            res.status(200).send({ data: books });
        } catch (err) {
            console.log(err)
            res.status(400).send({ error: true, msg: err });
        }
    },

    async listUserBooks(req, res) {
        try {
            const books = await bookService.listUserBooks(req.params.userId);

            res.status(200).send({ data: books });
        } catch (err) {
            res.status(400).send({ error: true, msg: err });
        }
    },

    async countUserBooks(req, res) {
        try {
            const result = await bookService.countUserBooks(req.params.userId);

            res.status(200).send({ data: result[0].count });
        } catch (err) {
            res.status(400).send({ error: true, msg: err });
        }
    },

    async countAvaiableBooks(req, res) {
        try {
            const result = await bookService.countAvaiableBooks();

            res.status(200).send({ data: result[0].count });
        } catch (err) {
            res.status(400).send({ error: true, msg: err });
        }
    },

    async newBook(req, res) {
        try {
            const book = await bookService.create(req.body);

            res.status(201).send({ data: book });
        } catch (err) {
            res.status(400).send({ error: true, msg: err });
        }
    },

    async rent(req, res) {
        try {
            const { bookId, userId } = req.body;
            const book = await bookService.rent(bookId, userId);
            
            res.status(200).send({ data: book });
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
