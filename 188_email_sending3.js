const request = require('request');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

const url = 'http://news.naver.com/main/main.nhn?mode=LSD&mid=shm&sid1=105';
const iconv = require('iconv-lite');

const date = new Date();   // 날짜

let title;
const arrayTitle = [];

function sendMail(arHeadline) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'charles01dev@gmail.com',
            pass: 'aqmvavyewroangwm'
        },
    });

    // setup email data with unicode symbols
    const mailOptions = {
        from: 'charles01dev@gmail.com',
        to: 'mucollabo@gmail.com',
        subject: `${date.toLocaleDateString()} Today News`, // Subject line
        // html body
        html: `${`<h1>IT/과학 실시간 뉴스 헤드라인</h1><h2>${arHeadline}</h2><br><a href="https://mucollabo.github.io"><img src="https://global-uploads.webflow.com/60ddb7e2e50eaef5bec9595c/6167204ed759bf9693f7ee1b_data-pipelines2.png"></a>`}`
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
}

const parse = (decodedResult) => {
    const $ = cheerio.load(decodedResult);
    const titles = $('div.cluster_body').find('a');

    for (let i = 0; i < titles.length; i += 1) {
        title = $(titles[i]).text();
        arrayTitle[i] = title.trim();
    }
    return arrayTitle;
};

request({
    uri: url,
    method: 'GET',
    encoding: null,
}, (err, res, body) => {
    const decodedResult = iconv.decode(body, 'euc-kr');
    const arTitles = parse(decodedResult);
    sendMail(arTitles);
});
