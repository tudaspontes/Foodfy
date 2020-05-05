const express = require('express')
const routes = express.Router()
const recipes = require("./data")
const admin = require('./admin')

// setting the routes

routes.get('/', function(req, res) {
    const featuredRecipes = recipes.slice(0, 6);

    res.render('./admin/index', { recipes: featuredRecipes});
});

routes.get('/about', function(req, res) {
    res.render('./admin/about');
});

routes.get('/recipes', function(req, res) {
    res.render('./admin/recipes', { recipes });
});

routes.get('/recipes/:id', function(req, res) {
    const id = req.params.id;

    res.render('./admin/recipe', { recipe: recipes[id] })
})

routes.get('/admin', function (req, res) {
    res.render('./admin/create')
})

routes.post('/admin', admin.post)

routes.get('/admin/:id', admin.show)

// routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
// routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes