const express = require ("express");
const router = express.Router();
const passport = require('passport');

const logController = require('../controller/logcontroller');
const signController = require('../controller/signcontroller');
const dashController = require('../controller/dashcontroller');

//LOGIN
router.get('/login', logValidator, logController.log);

router.post('/login', passport.authenticate('local-login', {
    
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    }));

//SIGNUP
router.get('/signup', signController.add);

router.post('/signup', passport.authenticate('local-signup', {
    
    successRedirect: '/dashboard',
    failureRedirect: '/signup',
    }));

// LOGOUT

router.get('/logout', dashController.logout);

// DASHBOARD

router.get('/dashboard', isLoggedIn, dashController.dashboard);

// VALIDATE FUNCTIONS

function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();    
        res.redirect('/login');    
    }
    
function logValidator(req, res, next) {
        if (!req.isAuthenticated())
            return next();    
        res.redirect('/dashboard');    
    } 

module.exports = router;