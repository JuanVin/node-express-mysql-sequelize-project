const signController = {}

signController.add = (req,res) => {
    res.render("../views/signup");
}

module.exports=signController;