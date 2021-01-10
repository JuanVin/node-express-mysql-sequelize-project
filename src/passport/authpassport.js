var bCrypt = require('bcrypt');
const User = require('../database/models/Users');

module.exports = function(passport) {

    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

// used to deserialize the user

    passport.deserializeUser(function(id, done) {
        User.findByPk(id, function(err, user) {
            done(err, user);
        });
    });
 
    passport.use('local-signup', new LocalStrategy(

        {          
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true 
        },
    
        function(req, username, password, done){
           
            var generateHash = function(password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8));
            };

            User.findOne({where: {username:username}}).then(function(err, user){
                if(err)return done(err); 
                if(user)return done(null, false, req.flash('signMessage', 'That email is already taken'));
                else{
                    var userPassword = generateHash(password);
                    var data =
                        { 
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        username:username,
                        password:userPassword  
                        };
    
                    User.create(data).then(function(newUser,created){
                        if(!newUser){
                            return done(null,false);
                        }
                        if(newUser){
                            return done(null,newUser);
                        } 
                    });
                }
            }); 
        }
    ));
    //LOCAL SIGNIN

    passport.use('local-login', new LocalStrategy(
 
        {
            usernameField : 'username',
            passwordField : 'password',
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
            }).then(function(user) {
     
                if (!user) {
     
                    return done(null, false, req.flash(
                        'message', 'Email does not exist'
                    ));
     
                }
     
                if (!isValidPassword(user.password, password)) {
     
                    return done(null, false, req.flash(
                        'message', 'Incorrect password.'
                    ));
     
                }
                
                return done(null, user);
     
            }).catch(function(err) {
     
                console.log("Error:", err);
     
                return done(null, false, req.flash(
                    'message', 'Something went wrong with your Signin'
                ));
     
            });
        }  
    ));
}



