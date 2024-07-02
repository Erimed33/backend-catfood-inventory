const express =require('express')

const app = express();

// arg endpoint
app.get('/', (req, res) => {
    res.send('This is the main page')
})

app.get('/inventory', (req, res) => {
    res.send('route to inventory')
})

app.get('/controller', (req, res) => {
    res.send('controller')
})
// reminder: create controllers and connect the aopropriatly
module.exports = app