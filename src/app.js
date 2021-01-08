const express = require('express');
const app = express();
const sequalize = require('./database/db')
const morgan = require ('morgan');
const path = require('path'); // Module from NodeJS
const passport = require('passport');
const session = require('express-session');

require ('./database/associations');

//Settings

const PORT = process.env.PORT || 3000;
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

//app.use(express.json);  

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));       
app.use(passport.initialize());
app.use(passport.session());

// Routes

app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));

// Starting the server
app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
    //console.log(process.env.DB_HOST);
    sequalize.sync({ force: true}).then(()=>{
        console.log("Conectado a base de datos")
    }).catch(err => {
        console.log(err)
    })
})