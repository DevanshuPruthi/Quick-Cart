const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const app = express()
const Routes = require("./routes/route.js")

app.use(express.json({ limit: '10mb' }))
app.use(cors())

mongoose
    .connect('mongodb://127.0.0.1:27017/QuickCart', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log("NOT CONNECTED TO NETWORK", err))

app.use('/', Routes);

app.listen(5000, () => {
    console.log(`Server started at port no. 5000`)
})