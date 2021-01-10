var bCrypt = require('bcrypt');

user = require('../models/Users');


module.exports = function(passport) {

    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findByPk(id).then(function(user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });

    var User = user;
 
    var LocalStrategy = require('passport-local').Strategy;
 
    //LOCAL SIGNUP

    passport.use('local-signup', new LocalStrategy( // Working
 
        {

            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {
 
            var generateHash = function(password) { 
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null); 
            };
 
            User.findOne({
                where: {
                    username: username
                }
            }).then(function(aux) {
 
                if (aux)
 
                {
                    return done(null, false, {
                        message: 'That User is already taken'
                    });
 
                } else
 
                {
 
                    var userPassword = generateHash(password);
 
                    var data =
 
                        {
                        
                            firstname: req.body.firstname,
 
                            lastname: req.body.lastname,

                            username: username,
 
                            password: userPassword
 
                        };
 
                    User.create(data).then(function(newUser, created) {
 
                        if (!newUser) {
                            return done(null, false);
                        }
 
                        if (newUser) {
                            return done(null, newUser);
                        }
                    });
                }
            });
        }
    ));
 
    //LOCAL LOGIN

    passport.use('local-login', new LocalStrategy(

        {
            passReqToCallback: true 
        },
        
        function(req, username, password, done) {
            
            var isValidPassword = function(userpass, password) {
                
                return bCrypt.compareSync(password, userpass);
     
            }
     
            User.findOne({
                where: {
                    username: username
                }
            }).then(function(aux) {
                if (!aux) {
                    console.log('User does not exist');
                    return done(null, false, {
                        message: 'User does not exist'
                    });
                }
     
                if (!isValidPassword(aux.password, password)) {
                    console.log('User does not exist');
                    return done(null, false, {
                        message: 'User does not exist'
                    });
                }
                
                return done(null, aux);
     
            }).catch(function(err) {
     
                console.log("Error:");
     
                return done(null, false, {
                    message: 'Email does not exist'
                });   
            });
        }  
    ));
}


