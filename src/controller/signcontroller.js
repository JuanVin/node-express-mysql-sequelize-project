const signController = {}

signController.add = (req,res) => {
    message = req.flash('signMessage');
    console.log(message);
    res.render("../views/signup",{message});
}

module.exports=signController;