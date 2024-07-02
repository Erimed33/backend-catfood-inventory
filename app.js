const express =require('express')
const app = express();
const cors = require('cors')
const catFoodController = require('./Controllers/catFoodController')

// middleware
app.use(cors())

// arg endpoint - home
app.get('/', (req, res) => {
    res.send('This is the main page')
})

// resource to be routed to controller

app.use('./catFood', catFoodController)


// 404 page not found
app.get('*', (req, res) => {
    res.status(404).json({error: "Page not found"})
})


module.exports = app