const db = require('../database/models');

const ActivityService = {

    findAll(user) {

        return db.Activity.findAll({ where: { userId: user.id }, include: [db.ActivityType]});

    },

    create(activity, user) {
        return db.Activity.create({ ...activity, userId: user.id });
    }

}

module.exports = ActivityService;
