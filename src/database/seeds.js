
const sequelize = require('./db');
const Unit = require('../models/Units');
require('../models');

const unit = [
    {unidad: "Homicidios", email: process.env.UNIT_EMAIL},
    {unidad: "Violencia de Género", email: process.env.UNIT_EMAIL},
    {unidad: "Correccional", email: process.env.UNIT_EMAIL},
    {unidad: "Delitos Económicos", email: process.env.UNIT_EMAIL},
    {unidad: "Delitos Contra la Integridad Sexual", email: process.env.UNIT_EMAIL},
    {unidad: "Robos y Hurtos", email: process.env.UNIT_EMAIL},
    {unidad: "Delitos no Especializados", email: process.env.UNIT_EMAIL}
]

sequelize.sync({force:false}).then(() => {

}).then(() => {
    unit.forEach(user => Unit.create(user))
})