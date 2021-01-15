const express = require ("express");
const router = express.Router();

const logController = require('../controllers/logcontroller');
const signController = require('../controllers/signcontroller');
const dashController = require('../controllers/dashcontroller');

//LOGIN
router.get('/login', logValidator, logController.log);

router.post('/login', logController.auth);

//SIGNUP

router.get('/signup', logValidator, signController.add);

router.post('/signup', signController.auth);

// LOGOUT

router.get('/logout', dashController.logout);

// DASHBOARD

router.get('/dashboard', isLoggedIn, dashController.dashboard);

router.post('/cargarTurno', dashController.turn)

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