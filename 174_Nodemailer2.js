const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'charles01dev@gmail.com',
        pass: 'cjfguS106971!',
    },
});

// setup email data with unicode symbols
const mailOptions = {
    from: 'charles01dev@gmail.com',   // sender address
    to: 'mucollabo@gmail.com',     // list of receivers
    subject: 'Hello !',               // Subject line
    // text: 'Hello world?',             // plain text body
    // html body
    html: '<h1>Hello HTML</h1><a href="http://www.infopub.co.kr">' + '<img src="http://www.infopub.co.kr/pdspool/commom/main_top/2016-11-02.jpg"/></p></a>',
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
