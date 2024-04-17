const express = require('express')
const app = express()
app.use(express.json())
require('dotenv').config()
const morgan = require('morgan')
app.use(morgan('dev'))
const mongoose = require('mongoose')
const gameBlogRoutes = require('./routes/gameblogRoutes')
const userRoutes = require('./routes/userRoutes')
const userMessageRoutes = require('./routes/userMessageRoutes')
const cors = require('cors')

const mangaRoutes = require('./routes/mangaRoutes')

app.use(cors())
const cookieParser = require('cookie-parser')
app.use(cookieParser())


let mongoDBUrl = 'mongodb+srv://sheinminoo69:2004142SHEIN@cluster0.knqmhj3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoDBUrl).then(()=>{
    console.log("MongoDB is Connected to your APP!")
    app.listen(process.env.PORT,()=>{
        console.log('Your App is running on '+ process.env.PORT)
    })
})


app.use('/api/gameblogs',gameBlogRoutes)
app.use('/api/user',userRoutes)
app.use('/api/user',userMessageRoutes)
app.use('/api/mangas',mangaRoutes)

app.get('/', function (req, res) {
  res.send('Your app is running')
})

app.get('/set-cookie',(req,res)=>{
    res.cookie('user','Shein')
    res.cookie('user','Min')
    res.send("Cookie Already Send")
    res.cookie('important','Shein',{httpOnly:true})
})

