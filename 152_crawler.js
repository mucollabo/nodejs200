const cheerio = require('cheerio');
const crawler = require('./crawler');

const parse = (decodeResult) => {
    // console.log(decodeResult);
    const $ = cheerio.load(decodeResult);
    const titles = $('h3.r').find('a');
    for (let i = 0; i < titles.length; i += 1) {
        const title = $(titles[i]).text();
        console.log(title);
    }
};

crawler.crawl(parse)({q: '서울대입구역 맛집'});

// class='r'을 찾을 수 없는 관계롤 현재(2022/05/03) 크롤링 불가
