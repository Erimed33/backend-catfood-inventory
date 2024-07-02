const app =require('./app')

require('dotenv').config()

const PORT = process.env.PORT

// listens for request letting us know the server is on
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})