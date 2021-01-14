
const sequelize = require('./db');
const Unit = require('../models/Units');
require ('../models/associations');

const unit = [
    {unidad: "Homicidios"},
    {unidad: "Violencia de Género"},
    {unidad: "Correccional"},
    {unidad: "Delitos Económicos"},
    {unidad: "Delitos Contra la Integridad Sexual"},
    {unidad: "Robos y Hurtos"},
    {unidad: "Delitos no Especializados"}
]

sequelize.sync({force:false}).then(() => {

}).then(() => {
    unit.forEach(user => Unit.create(user))
})