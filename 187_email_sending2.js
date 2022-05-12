const request = require('request');
const cheerio = require('cheerio');

const url = 'http://news.naver.com/main/main.nhn?mode=LSD&mid=shm&sid1=105';
const iconv = require('iconv-lite');

let title;
const arrayTitle = [];

const parse = (decodeResult) => {
    const $ = cheerio.load(decodeResult);
    const titles = $('div.cluster_body').find('a');

    for (let i = 0; i < titles.length; i += 1) {
        title = $(titles[i]).text();
        arrayTitle[i] = title.trim();
    }
    console.log(arrayTitle);
};

request({
    url: url,
    method: 'GET',
    encoding: null,
}, (err, res, body) => {
    const decodedResult = iconv.decode(body, 'euc-kr');
    parse(decodedResult);
})
