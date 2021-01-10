const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require ('../database/db');

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

module.exports = Unidad;