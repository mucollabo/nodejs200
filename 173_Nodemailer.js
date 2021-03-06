const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'charles01dev@gmail.com',
        pass: '****',
    },
});

// setup email data with unicode symbols
const mailOptions = {
    from: 'charles01dev@gmail.com',   // sender address
    to: 'mucollabo@gmail.com',     // list of receivers
    subject: 'Hello !',               // Subject line
    text: 'Hello world?',             // plain text body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Message sent: ${info.response}`);
    }
    transporter.close();
});
