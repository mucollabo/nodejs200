const fs = require('fs');

const userList = [
    {name: 'charles', age: 31},
    {name: 'jihyun', age: 31},
];

fs.writeFile('./list.json', JSON.stringify(userList), function (error) {
    console.log(error);
});
