const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})


connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server is running');
    })
})



async function connectDB() {
    await mongoose.connect(process.env.DB_LOCATION)
    console.log('Database connected')
}
