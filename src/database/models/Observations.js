const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require ('../db');


const Observacion = sequelize.define('observation', {
    comentario: {
        type: DataTypes.TEXT,
    }
}, {});

module.exports = Observacion;