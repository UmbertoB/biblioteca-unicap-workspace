const database = require('../database');

const UserService = {

    _fromID(id) {
        return database('users').where('id', '=', id);
    },

    findAll() {
        return database('users');
    }
}

module.exports = UserService;
