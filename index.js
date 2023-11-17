

var url = 'https://jsonplaceholder.typicode.com/todos/1';


var axios = require('axios');
var https = require('https');

var proxy = new https.Agent({
    rejectUnauthorized: false,
    requestCert: true
});

axios.get(url, {
    httpsAgent: proxy
}).then(function (response) {
    return response;
}).then(function (response) {
    console.log(response.data);
})
