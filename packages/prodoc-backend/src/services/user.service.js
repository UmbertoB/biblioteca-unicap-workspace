const db = require('../database/models');

const UserService = {

    _fromID(id) {
        return db.User.findOne({
            where: { id },
            include: [
                { model: db.Roles }, 
                { model: db.Degree, include: [db.DegreeType], limit: 1, order: [['typeId', 'DESC']] }
            ],
        });
    },

    findAll() {

        return db.User.findAll();

    },

    async addScore(user, score) {

        const { score: userCurrentScore } = await db.User.findOne({ where: { id: user.id } });

        return db.User.update(
            { score: userCurrentScore + score },
            { returning: true, where: { id: user.id } }
        );

    },

    changeRole(userId, newRoleId) {

        return db.User.update(
            { roleId: newRoleId },
            { returning: true, where: { id: userId } }
        );

    }


}

module.exports = UserService;
