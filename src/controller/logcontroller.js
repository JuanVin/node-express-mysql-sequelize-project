const logController = {}

logController.log = (req,res) => {
    const message = req.flash('loginMessage')[0]
    console.log(message);
    res.render('../views/login.ejs', {
        message 
    });
}

module.exports = logController;