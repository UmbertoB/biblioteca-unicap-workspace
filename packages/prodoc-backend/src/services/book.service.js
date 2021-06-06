const database = require('../database');

const BookService = {
    listAll() {
        return database
            .select(['books.id as book_id', 'title', 'description', 'username', 'isrent'])
            .from('books')
            .leftJoin('users', 'users.id', 'books.isrent');
    },

    listUserBooks(userId) {
        return database('books').where('isrent', '=', userId);
    },
    
    countUserBooks(userId) {
        return database.count().from('books').where('isrent', '=', userId);
    },

    countAvaiableBooks() {
        return database.count().from('books').whereNull('isrent');
    },

    create({ title, description }) {
        return database('books').insert({ title, description })
    },  

    rent(bookId, userId) {
        return database("books")
        .update({ isrent: userId })
        .where("id", '=' , bookId);
    },
    
    returnBook(bookId) {
        return database("books")
        .update({ isrent: null })
        .where("id", '=' , bookId);
    }

}

module.exports = BookService;
