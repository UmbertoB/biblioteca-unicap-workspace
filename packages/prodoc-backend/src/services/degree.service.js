const db = require('../database/models');

const DegreeService = {

    findAll(user) {

        return db.Degree.findAll({ where: { userId: user.id }, include: [db.DegreeType] });

    },

    create(degree, user) {
        return db.Degree.create({ ...degree, userId: user.id });
    },

    delete(id) {

        return db.Degree.destroy({
            where: { id }
        });

    }

}

module.exports = DegreeService;
