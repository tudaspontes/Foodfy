const express = require('express')

const user = require('./controllers/user')
const admin = require('./controllers/admin')

const routes = express.Router()

// users routes

routes.get('/', user.index);
routes.get('/about', user.about);
routes.get('/recipes', user.recipes);
routes.get('/recipes/:id', user.recipe);

// admin routes

routes.get('/index', admin.index);
routes.get('/create', admin.create);
routes.get('/show/:id', admin.show);
routes.get('/show/:id/edit', admin.edit);

routes.post('/admin', admin.post);
// routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
// routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes