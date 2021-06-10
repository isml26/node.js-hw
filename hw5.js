const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("request sended");
    const url = req.url;
    if(url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>INDEX PAGE</h2>')
    }
    else if(url === '/about'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>ABOUT PAGE</h2>')
    }
    else if(url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>CONTACT PAGE</h2>')
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('404 CANNOT FIND')
    }
    res.end();
});
const PORT = process.env.PORT || 3000;
server.listen(3000,()=>{
    console.log(`Server started on port ${PORT} `);
})
