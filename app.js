const express =require('express')

const app = express();

// arg endpoint
app.get('/', (req, res) => {
    res.send('This is the main page')
})

// listens for request letting us know the server is on
app.listen(4003, () => {
    console.log(`Server is running on port 4003`)
})