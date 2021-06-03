const db = require('../database/models');

const RoleService = {

    findAll() {

        return db.Roles.findAll();

    },

    _fromID(id) {

        return db.Roles.findOne({ where: { id } });

    },


}

module.exports = RoleService;
