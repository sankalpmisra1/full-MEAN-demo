const express = require('express');
const app = express();
const fs = require('fs');
const dir = './public/';
const port = process.env.PORT | 3000;

app.get('/', (req,res) =>{
    render(res, 'index.html');
})

app.get('/about', (req,res) =>{
    render(res, 'about.html');
})

app.get('/contact', (req,res) =>{
    render(res, 'contact.html');
})

/*previous method given below without using express

const server = http.createServer((req , res) =>{
if(req.url === '/'){
   render(res, 'index.html');
}else if(req.url === '/about'){
    render(res, 'about.html')
}else if(req.url ===  '/contact'){
    render(res, 'contact.html')
}else{
    res.writeHead(404,{'Content-Type' : 'text/html'});
    res.end('<h1>404 File Not Found!!</h1>')
}
}).listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})
*/
app.listen(port, () =>{
    console.log(`http://localhost:${port}`);
})
const render = (res, file) => {
    fs.readFile(dir+file, (err, data) =>{
        if(err){
            res.writeHead(404,{'Content-Type' : 'text/html'});
            res.end('<h1>404 File Not Found!!</h1>')
        }
        res.writeHead(200,{'Content-Type' : 'text/html'});
        return res.end(data);
    });
}