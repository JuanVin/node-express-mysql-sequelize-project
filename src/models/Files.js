const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require ('../database/db');

const Expediente = sequelize.define('file', {
    expediente: {
            type: DataTypes.STRING,
            allowNull: false
    },
    fechaIngreso: {
            type: DataTypes.DATE,
    },
    fechaTurno: {
            type: DataTypes.DATE,
            allowNull: false
    },
    estado: {
            type: DataTypes.STRING,
            allowNull: false
    },
    fechaEgreso: {
        type: DataTypes.DATE,
    }
}, {});

module.exports = Expediente;