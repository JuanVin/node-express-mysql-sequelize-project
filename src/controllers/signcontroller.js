const signController = {}
const passport = require('passport');

signController.add = (req,res) => {
    res.render("../views/signup");
}

signController.auth = (passport.authenticate('local-signup', {
    
    successRedirect: '/dashboard',
    failureRedirect: '/signup'

    }))

module.exports = signController;
