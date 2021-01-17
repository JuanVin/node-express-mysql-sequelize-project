const dashController = {}
const user = require('../models/Users')
const unit = require('../models/Units');
const turn = require('../models/Files');
const observation = require('../models/Observations');


dashController.dashboard = (req, res) => {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    today = yyyy+'-'+mm+'-'+ dd; 

    turn.findAll({where: {
        fechaTurno: today
    }}).then(function(currentFile){
        user.findOne({where: {
            id: req.session.passport.user
        }}).then(function(user){
            unit.findAll({
                attributes: ['unidad', 'id']
            }).then(function(units) {   
                res.render("../views/dashboard", {
                    title: 'Data',
                    units: units ,  
                    user: user.lastname + ", " + user.firstname,
                    file: currentFile
                });
            })
        })
    })

    
    
     
}
dashController.turn = (req,res) => {
    unit.findOne({
        where: {
            unidad: req.body.ufi
        }
    }).then(function(unit){
        const Turn = {
            expediente: req.body.exp,
            fechaTurno: req.body.date,
            horaTurno: req.body.time,
            estado: req.body.status,
            unitId: unit.id,
            userId: req.session.passport.user        
        }
        turn.create(Turn).then(function(newExp){
            if(!newExp){
                console.log("exp don't created")
            }
            if(newExp){
                const Observation = {
                    comentario: req.body.observations,
                    fileId: newExp.id,
                    userId: req.session.passport.user   
                }
                observation.create(Observation);
                console.log("new exp created")
                if (req.body.check) {
                    require('./mailcontroller')(req,res,unit.email);
                };     
                res.redirect('/dashboard')
            }
        })
    })

}
dashController.logout = (req,res) =>{
    req.session.destroy(function(err) {
        res.redirect('/login');
    });
}

module.exports = dashController;