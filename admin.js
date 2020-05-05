const fs = require('fs')
const data = require('./data.json')
const recipes = require("./data")
//create

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

        return res.redirect("/admin")
    })
}

//show

exports.show = function (req, res) {
    
    const { id } = req.params

    const foundRecipe = data.recipes.find(function(recipe){
        return recipe.id == id
    })

    if (!foundRecipe) res.render('admin/show', {recipes})
}