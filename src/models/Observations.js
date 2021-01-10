const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require ('../database/db');


const Observacion = sequelize.define('observation', {
    comentario: {
        type: DataTypes.TEXT,
    }
}, {});

module.exports = Observacion;