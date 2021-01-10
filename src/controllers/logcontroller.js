const logController = {}

logController.log = (req,res) => {
    res.render('../views/login');
}

module.exports = logController;