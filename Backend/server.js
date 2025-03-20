const express = require("express")
const app = express()
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const PORT = 5000
app.use(express.json())
app.use(cors())


const userRoutes = require('./routes/User.route')
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("MONGO DB connected successfull"))
    .catch((err=>console.error(err)))


app.use('/user',userRoutes)

app.listen(PORT,()=>{
    console.log("The server is running on http://localhost:5000")
})