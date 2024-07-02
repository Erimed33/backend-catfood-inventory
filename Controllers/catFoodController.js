const express = require('express')
const catFood = express.Router()
const catFoodInventory = require('../Models/catFoodModels')



catFood.get('/', (req, res) => {
    res.json(catFoodInventory)
})


// get
// app.get('/catFood/:index', (req, res) => {
//     const { index } = req.params
//     res.send( catFood[index] )
// })

module.exports = catFood