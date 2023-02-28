const http = require("http")

// Create server Obj

http.createServer((req,res) => {
    //write response
    res.write("hello world")
    res.end()
}).listen(3300, ()=> console.log("server is running..."))
