const fs = require("fs")
const path = require("path");
const Logger = require("./LogSystem")

// FileSystem operations
// file path and name
const fileName = "log.txt"
const filePath = path.join(__dirname, fileName)


// Append File function, to be called by Logger listener function
function appendFile(dataToAppend) {
    fs.appendFile(filePath, `\n ${dataToAppend}`, err => {
        if (err) throw err
        console.log(`message added to ${filePath}`)
    })
}

// Create logger object, an instance of the Logger class
const logger = new Logger();

// Create the listening function for the emitter of logger
logger.on("message", (data) => appendFile(JSON.stringify(data)))


logger.log("Hi there")










