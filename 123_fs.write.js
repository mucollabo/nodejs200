const fs = require("fs");

const constents = "hello\nbye\nėë";
fs.writeFile('./message.txt', constents, 'utf-8', function(error) {
    console.log('Error!!');
});
