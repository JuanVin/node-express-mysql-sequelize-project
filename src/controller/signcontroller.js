const signController = {}
const User = require('../database/models/Users')
const bcrypt = require ("bcrypt");

signController.add = (req,res) => {
    res.render("../views/signup");
}
signController.save = (req,res) => {
    const user = req.body;
    var hash = bcrypt.hashSync(user.password,10);
    const query = User.create({
        firsname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        password: hash
    })
    if (query) res.send("todo ok");
    else res.send("se caldeo perro");
}

module.exports=signController;