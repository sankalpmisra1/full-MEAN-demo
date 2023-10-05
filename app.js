const http = require('http');
const server = http.createServer((request, response) => {

    response.writeHead(200, {'Content-type' : 'text/html'});
if(request.url === '/get'){
    response.write('You reached the GET page');
    if(request.method === 'GET'){
        response.end('GET');
    }
}else if(request.url === '/post'){
    response.write('You reached the POST page');
    if(request.method === 'POST'){
        response.end('POST');
    }
}else if(request.url === '/put'){
    response.write('You reached the PUT page');
    if(request.method === 'PUT'){
        response.end('PUT');
    }
}else if(request.url === '/delete'){
    response.write('You reached the DELETE page');
    if(request.method === 'DELETE'){
        response.end('DELETE');
    }
}else {
    response.end('Not Found..')
}
response.end('No Request..');
    //response.write('<h1>Welcome to Node.js!!</h1>');
    //response.end();
    //or
    //response.end('<h1>Welcome to Node.js!!</h1>');
    
});

server.listen(4000, () => console.log("http://localhost:4000"));