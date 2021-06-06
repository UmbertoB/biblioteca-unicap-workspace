const { Knex } = require('knex');

/**
 * @type {Knex}
 */
module.exports = require('knex')({
    client: 'pg',
    connection: {
        user: 'user',
        password: 'password123',
        server: '127.0.0.1',
        port: 5432,
        database: 'bibliotecadb'
    }
});
