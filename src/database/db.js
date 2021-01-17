const { Sequelize } = require('sequelize');
const { database } = require('../config');

const sequelize = new Sequelize(
    database.database,
    database.username,
    database.password
    , {
    host: database.host,
    dialect: 'mysql',
    timezone: 'America/Argentina/Buenos_Aires'
});

module.exports = sequelize;
