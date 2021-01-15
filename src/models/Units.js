const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require ('../database/db');
const Expediente = require('./Files');

const Unidad = sequelize.define('unit', {
    unidad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: { 
        type: DataTypes.STRING, 
        validate: {isEmail:true} 
    },
}, {});

    Unidad.hasMany(Expediente);

module.exports = Unidad;