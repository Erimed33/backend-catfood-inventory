const express =require('express')
const app = express();
const cors = require('cors')
const catFoodController = require('./Controllers/catFoodController')


// middleware
app.use(cors())

// resource to be routed to controller
app.use('/catfood', catFoodController)

// arg endpoint - home
app.get('/', (req, res) => {
    res.send('This is the main page')
})




// 404 page not found
app.get('*', (req, res) => {
    res.status(404).json({error: "Page not found"})
})


module.exports = app