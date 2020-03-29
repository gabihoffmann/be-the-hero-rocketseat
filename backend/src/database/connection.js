const knex = require('knex'); //importar o knex
const configuration = require("../../knexfile.js"); //importar as configurações do banco

const connection = knex(configuration.development);

module.exports = connection;