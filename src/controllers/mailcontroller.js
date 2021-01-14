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
    from: `"Some thing" ${process.env.SENDER_EMAIL}`,
    to: process.env.SENDER_EMAIL,
    subject: '',
    text: ''
};

transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
    } else {
        console.log("Email sent");
    }
});
