const  http = require('http')
const serve = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to homepage')

    }
    else if(req.url==='/about'){
        res.end('HISTORY is in the past')
    }
    res.end('<h1>OOps!</h1><p>We cant seem to find that page</p>')
})

serve.listen(5000)