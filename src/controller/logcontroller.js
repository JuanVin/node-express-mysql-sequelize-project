const logController = {}

logController.log = (req,res) => {
    res.render('../views/login.ejs');
}

module.exports = logController;