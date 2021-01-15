const logController = {};
const passport = require('passport');


logController.log = (req,res) => {
    res.render('../views/login', {message: 'eia lkeia'});
}

logController.auth = (passport.authenticate('local-login', {
    
    successRedirect: '/dashboard',
    failureRedirect: '/signup'

    }));


module.exports = logController;