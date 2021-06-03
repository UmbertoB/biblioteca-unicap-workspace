const db = require('../database/models');

const ActivityTypeService = {

    findAll() {

        return db.ActivityType.findAll();

    },

    _fromID(id) {

        return db.ActivityType.findOne({ where: { id } });

    },


}

module.exports = ActivityTypeService;
