

var url = 'https://jsonplaceholder.typicode.com/todos/1';


var axios = require('axios');
var https = require('https');

var proxy = new https.Agent({
    rejectUnauthorized: false,
    requestCert: false,
});

axios.get(url, {
    httpsAgent: proxy
}).then(function (response) {
    return response;
}).then(function (response) {
    console.log(response.data);
})
