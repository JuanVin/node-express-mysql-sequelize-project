const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require ('../database/db');

const Unidad = sequelize.define('unit', {
    unidad: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});

module.exports = Unidad;