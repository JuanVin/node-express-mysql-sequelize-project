const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require ('../db');
//const Expediente = require('../models/Expedientes');
const Unidad = sequelize.define('unit', {
    unidad: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {});

//Unidad.hasMany(Expediente);

module.exports = Unidad;