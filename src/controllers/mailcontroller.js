
module.exports = function(req,res,email){
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

var mailOptions = {
    from: `"U.D.A.P.I.F." ${process.env.SENDER_EMAIL}`,
    to: email,
    subject: `Turno Expediente: ${req.body.exp}`,
    text: `Fecha: ${req.body.date} a las ${req.body.time}`
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    } else {
        console.log("Email sent");
    }
});
}