const   express = require('express'),
        app = express(),
        passport = require('passport'),    
        session = require('express-session'),
        bodyParser = require('body-parser'),
        sequelize = require('./database/db'),
        morgan = require ('morgan'),
        path = require('path'); // Module from NodeJS
        
var     env =   require('dotenv').config(),
        models = require ('./models');      

        require('./passport/authPassport')(passport);


//Settings

const PORT = process.env.PORT || 3000;
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


//Middleware

app.use(morgan('dev'));

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For pasport
app.use(session({ 
    secret:process.env.EXPRESS_SESSION_SECRET,
    resave: true, 
    saveUninitialized:true
    }));  

app.use(passport.initialize());
app.use(passport.session());

// Routes

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));

// Starting the server
app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
    sequelize.sync({ force: false}).then(()=>{
        console.log("Conectado a base de datos")
    }).catch(err => {
        console.log(err)
    })
})