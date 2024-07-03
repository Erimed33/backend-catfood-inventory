const express = require('express')
const catFood = express.Router()
const catFoodInventory = require('../Models/catFoodModels')

// GETS all the cat food

catFood.get('/', (req, res) => {
    res.json(catFoodInventory)
})

// show route - only one cat food
catFood.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if (catFoodInventory[arrayIndex]) {
    res.status(200).json(catFoodInventory[arrayIndex])
} else {
    res.status(404).json({ error: "Cat food not found"})
}
})

// post creates new catfood

catFood.post('/', (req, res) => {
    const newCatFood = {
        id: catFoodInventory.length + 1,
    ...req.body
    
    }
    catFoodInventory.push(newCatFood)
    res.status(201).json(newCatFood)

})



module.exports = catFood