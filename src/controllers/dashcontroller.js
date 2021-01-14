const dashController = {}
const unit = require('../models/Units');
const turn = require('../models/Files');


dashController.dashboard = (req, res) => {
    
    unit.findAll({
        attributes: ['unidad']
    }).then(function(units) {   
        res.render("../views/dashboard", {
            title: 'Unidades',
            units: units
        });
    })
     
}
dashController.turn = (req,res) => {

    console.log(req.body);
    unit.findOne({
        where: {
            unidad: req.body.ufi
        }
    }).then(function(unit){
        const Turn = {
            expediente: req.body.exp,
            fechaTurno: new Date(req.body.date),
            estado: req.body.status,
            unitId: unit.id            
        }
        turn.create(Turn).then(function(newExp){
            if(!newExp){
                console.log("exp don't created")
            }
            if(newExp){
                console.log("new exp created")
                if (req.body.check) {
                    require('./mailcontroller');
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