const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

// setting express to read static files

server.use(express.static('public'))

// setting the template engine

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
    
})

// setting the routes

server.get('/', function(req, res) {
    const featuredRecipes = recipes.slice(0, 6);

    res.render('home', { recipes: featuredRecipes});
});

server.get('/about', function(req, res) {
    res.render('about');
});

server.get('/recipes', function(req, res) {
    res.render('recipes', { recipes });
});

server.get('/recipes/:id', function(req, res) {
    const id = req.params.id;

    res.render('recipe', { recipe: recipes[id] })
})

// listening the server

server.listen(5000, function() {
    console.log("server is running")
})