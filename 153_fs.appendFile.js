const crawler = require('./crawler');
const cheerio = require('cheerio');
const fs = require('fs');
const {index} = require("cheerio/lib/api/traversing");

const parse = (decodeResult) => {
    const $ = cheerio.load(decodeResult);
    const titles = $('h3.r').find('a');
    titles.each((index, element) => {
        const title = $(element).text();
        console.log(title);
        fs.appendFile('./titles.txt', `${title}\n`);
    });
};

crawler.crawl(parse)({q: '샤로수길 맛집'});

// class='r'을 찾을 수 없는 관계롤 현재(2022/05/03) 크롤링 불가
