
const logController = {}
const sequalize = require('../database/db')
const User = require('../database/models/Users')
const bcrypt = require ("bcrypt");

logController.newlog = (req,res) => {
    const user = (req.body.name);
    const pass = (req.body.password);
    var hash = bcrypt.hashSync(pass,10);
    const bcryptPassword = bcrypt.compareSync(pass,hash);
    res.send(hash);
}
logController.log = (req,res) => {
    res.render('../views/login.ejs')
}
module.exports = logController;