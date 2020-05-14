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

routes.get('/admin/recipes', admin.index);
routes.get('/admin/recipes/create', admin.create);
routes.get('/admin/recipes/:id', admin.show);
routes.get('/admin/recipes/:id/edit', admin.edit);

routes.post('/admin', admin.post);
routes.put('/admin', admin.put);
routes.delete('/admin', admin.delete);
// routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
// routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita

module.exports = routes