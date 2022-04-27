const fs = require("fs");

const constents = "hello\nbye\n안녕";
fs.writeFile('./message.txt', constents, 'utf-8', function(error) {
    console.log('Error!!');
});
