const fs = require('fs')
const data = require('../data.json')

exports.index = function (req, res) {
    return res.render('admin/index', { recipes: data.recipes });
}

exports.post = function (req, res) {
    const keys = Object.keys(req.body)

    for(key of keys) {
        if(req.body[key] == "") {
            return res.send('Please fill all fields')
        }
    }
    
    req.body.id = Number(data.recipes.length + 1)
    
    data.recipes.push(req.body)


    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if(err) return res.send("Write file error")

        return res.redirect("/create")
    })
}

exports.create = function (req, res) {
    res.render('./admin/create')
}

exports.show = function (req, res) {
    
    const { id } = req.params

    const foundRecipe = data.recipes[id -1];

    if (!foundRecipe) return res.send('recipe not found');

    return res.render('admin/show', {recipe: foundRecipe})
}

exports.edit = function (req, res) {
    res.render('admin/edit')
}