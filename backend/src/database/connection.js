const knex = require('knex'); //importar o knex
const configuration = require("../../knexfile.js"); //importar as configurações do banco

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;