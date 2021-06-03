const db = require('../database/models');

const DegreeTypeService = {

    findAll() {

        return db.DegreeType.findAll();

    },

    _fromID(id) {

        return db.DegreeType.findOne({ where: { id } });

    },


}

module.exports = DegreeTypeService;
