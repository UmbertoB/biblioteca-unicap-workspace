const db = require('../database/models');

const UserService = {

    _fromID(id) {
        return db.User.findOne({
            where: { id }
        });
    },

    findAll() {
        return db.User.findAll();
    }
}

module.exports = UserService;
