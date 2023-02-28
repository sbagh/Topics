const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req,res) => {
    // if(req.url === "/"){
    //
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=> {
    //
    //         if (err) throw err
    //         res.writeHead(200, {'Content-type': 'text/html'})
    //         res.end(content)
    //     })
    // }
    //
    // if(req.url === "/api/users"){
    //     const users = [
    //         {name:'bob smith', age:40},
    //         {name:'jon doe', age:30}
    //     ]
    //     res.writeHead(200, {'Content-type': 'application/json'})
    //     res.end(JSON.stringify(users))
    // }


    // make file path dynamic instead :

    let filePath = path.join(__dirname, "public", req.url ==='/'? 'index.html' : req.url)

    //extension of file
    let extname = path.extname(filePath)

    // initial content type
    let contentType = 'text/html'

    // check ext and set content type
    switch(extname) {
        case '.js':
            contentType = 'text/javascript'
            break
        case '.css':
            contentType= 'text/css'
            break
        case '.json':
            contentType= 'application/json'
            break
        case '.png':
            contentType= 'image/png'
            break
        case '.jpg':
            contentType= 'image/jpg'
            break
    }

    // read file
    fs.readFile(filePath, (err,content)=> {
        if (err) {
            // check for ENOENT error code
            if (err.code === 'ENOENT') {
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-type': 'text/html'})
                    res.end(content, 'utf8')
                })
            } else {
                // if some other / server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`)
            }
        } else {
            //success
            res.writeHead(200, {'Content-Type': contentType})
            res.end( content, 'utf8')
        }
    })
})


const PORT = process.env.Port || 3400;


server.listen(PORT, () => console.log(`server running on port ${PORT}`))