const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

// setting express to read static files

server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))
server.use(routes)

// setting the template engine

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
    
})

// listening the server

server.listen(5000, function() {
    console.log("server is running")
})