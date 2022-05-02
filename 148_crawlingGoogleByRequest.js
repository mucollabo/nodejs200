const request = require('request');
// const {response} = require("express");

request({
    url: 'https://www.google.com/',
    method: 'GET',
}, (error, response, body) => console.log(body));
