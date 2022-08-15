const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
    res.end('Welcome to homepage')
    } else
    if(req.url === '/about'){
    res.end('About')
    } else {
        res.end('hiii')
    }    
})

server.listen(5000);