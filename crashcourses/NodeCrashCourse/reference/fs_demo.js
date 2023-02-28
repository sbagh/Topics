const fs = require("fs")
const path = require("path")


//Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, err => {
//     if (err) throw err;
//     console.log("folder created...")
// })


// Create and Write to File...
// writeFile will overwrite, not append
// fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "hello world", err => {
//     if (err) throw err;
//     console.log("file created and written to...")
// })



// Append file
fs.appendFile(path.join(__dirname, "/test", "hello.txt"), "  i love nod js", err => {
    if (err) throw err;
    console.log("file created and written to...")
})



// Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err,data) => {
//     if (err) throw err;
//     console.log(data)
// })


// Rename file
fs.rename(path.join(__dirname, "/test", "hello.txt"), path.join(__dirname, "/test", "helloworld.txt"), (err) => {
    if (err) throw err;
    console.log("file renamed..")
})
