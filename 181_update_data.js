// mysql 모듈 사용
const mysql = require('mysql');

// 연결할 DB 정보 입력
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '996599',
    database: 'comicbook',
    port: '3306',
});

// 데이터베이스 연결
connection.connect();

// update 쿼리문 사용, 한 필드 수정(genre 변경)
connection.query('update books set genre = \'action\' where number = 2 and name = \'Mygiant Nerd Boyfriend\';'
    ,(error, results, fields) => {
     if (error) throw error;
     console.log(results);
    });

connection.query('update books set genre = \'romance\', writer = \'JI\' where number = 2 and name = \'Mygiant Nerd Boyfriend\';'
    ,(error, results, fields) => {
    if (error) throw error;
    console.log(results);
    });

// 연결 종료
connection.end();
