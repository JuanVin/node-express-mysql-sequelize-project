const cookieParser = require('cookie-parser');

const   express = require('express'),
        app = express(),
        sequalize = require('./database/db'),
        morgan = require ('morgan'),
        path = require('path'), // Module from NodeJS
        passport = require('passport'),
        session = require('express-session'),
        flash = require("connect-flash"),
        cookie = require("cookie-parser");

        require ('./database/models/associations');
        require('dotenv').config();
        require('./passport/authpassport')(passport);
//Settings

const PORT = process.env.PORT || 3000;
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));


//Middleware

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(cookie());
app.use(session({ secret:process.env.EXPRESS_SESSION_SECRET,resave: false, saveUninitialized:false}));       
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


// Routes

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));

// Starting the server
app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
    sequalize.sync({ force: false}).then(()=>{
        console.log("Conectado a base de datos")
    }).catch(err => {
        console.log(err)
    })
})