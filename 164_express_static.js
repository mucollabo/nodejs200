const express = require('express');

// express 객체 생성
const app = express();

app.use(express.static(`${__dirname}/multimedia`));
app.use((request, response) => {
    response.writeHead('200', {'Content-Type': 'text/html;charset=utf8'});
    response.end('<img src="img/evgeny-tchebotarev-aiwuLjLPFnU-unsplash.jpg" width="100%"/>');
});

app.listen(3000, () => {
    console.log('Server is running port 3000!');
});
