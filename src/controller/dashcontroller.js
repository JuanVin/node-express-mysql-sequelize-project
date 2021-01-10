const dashController = {}

dashController.dashboard = (req, res) => {
    res.render("../views/dashboard");
}
dashController.logout = (req,res) =>{
    req.session.destroy(function(err) {
        res.redirect('/login');
    });
}

module.exports = dashController;