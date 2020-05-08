const recipes = require("../data")

exports.index =  function(req, res) {
    const featuredRecipes = recipes.slice(0, 6);

    res.render('./user/index', { recipes: featuredRecipes});
}

exports.about = function(req, res) {
    res.render('./user/about');
}

exports.recipes = function(req, res) {
    res.render('./user/recipes', { recipes });
}

exports.recipe = function(req, res) {
    const id = req.params.id;

    res.render('./user/recipe', { recipe: recipes[id] });
}

