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
    res.json(catFoodInventory[arrayIndex])
})

// get
// app.get('/catFood/:index', (req, res) => {
//     const { index } = req.params
//     res.send( catFood[index] )
// })

module.exports = catFood