const express = require('express')
const path = require('path')
const members = require('./Members')
const logger = require('./middleware/logger')

const app = express()

// init middleware
// app.use(logger)

//get all members
app.get('/api/members', (req,res) => res.json(members))

// get single member
app.get('/api/members/:id', (req,res) => {
    res.send(req.params.id)
})

// Set static folder 
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3500

app.listen(PORT, () => console.log(`server started on ${PORT}`))

