const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const database = require('../database');

const _jwtSecret = '0.rfyj3n9nzh'

const UserService = {

    async createUser({ email, password, username, type }) {
        password = bcrypt.hashSync(password);

        return await database('users').insert({ email, password, username, type });
        
    },

    async login(email) {

        const user = await database('users').where('email', '=', email);

        console.log(user)

        return jwt.sign({ user: user[0] }, _jwtSecret);

    },

    verifyToken(token) {
        return new Promise((resolve) => {
            jwt.verify(token, _jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false);
                    return;
                }

                UserService._user = database('users').where('user_id', '=', decoded['id']);
                resolve(true)
                return;
            })
        });
    }

}

module.exports = UserService;
