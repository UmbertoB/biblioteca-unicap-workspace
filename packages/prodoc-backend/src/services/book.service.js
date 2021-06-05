const db = require('../database/models');

const BookService = {
    listAll() {
        return db.Book.findAll({});
    },

    rent(bookId, userId) {
        return db.Book.update(
            { rentId: userId },
            { returning: true, where: { id: bookId } }
        );
    },
    
    returnBook(bookId) {
        return db.Book.update(
            { rentId: null },
            { returning: true, where: { id: bookId } }
        );
    }

}

module.exports = BookService;
