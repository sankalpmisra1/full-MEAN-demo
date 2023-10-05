const http = require('http')
const data = JSON.stringify({
    title : 'MEAN Stack'
})

const options ={
    hostname: 'localhost',
    port: 4000,
    path: '/',
    method: 'PUT', //PUT,DELETE,POST
    headers: {
        'Content-type' : 'application/json',
        'Content-Length' : data.length
    }
}

const request = http.request(options, response => {
    response.on('data', chunk => {
        process.stdout.write(chunk);
    })
})

request.on('error', error => {
    console.error(error);
})

request.end();