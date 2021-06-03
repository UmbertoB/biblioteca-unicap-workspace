const jwt = require('jsonwebtoken');
const db = require('../database/models');
const bcrypt = require('bcryptjs')

const _jwtSecret = '0.rfyj3n9nzh'

const UserService = {

    createUser({ email, password, name }) {

        password = bcrypt.hashSync(password);

        return db.User.create({ email, password, name });

    },

    async login(email) {

        const user = await db.User.findOne({ where: { email } })

        return jwt.sign({ user }, _jwtSecret);

    },

    verifyToken(token) {
        return new Promise((resolve) => {
            jwt.verify(token, _jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false);
                    return;
                }

                UserService._user = db.User.findByPk(decoded['id']);
                resolve(true)
                return;
            })
        });
    }

}

module.exports = UserService;
