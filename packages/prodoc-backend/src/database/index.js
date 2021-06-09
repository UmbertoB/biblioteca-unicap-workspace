const { Knex } = require('knex');

/**
 * @type {Knex}
 */
module.exports = require('knex')({
    client: 'pg',
    connection: {
        user: 'fcthwmjxcyqoca',
        password: '909e3eea762710894e28735dd5c0a89d0220cfd2782e139b3832d49359f1506c',
        host: 'ec2-54-224-194-214.compute-1.amazonaws.com',
        port: 5432,
        database: 'd41bhlj4cl0u5p',
        ssl: { rejectUnauthorized: false }
    },
});
