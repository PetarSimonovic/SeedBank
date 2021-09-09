require('dotenv').config()
console.log("Environment " + process.env.NODE_ENV)
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path');


const db = require('./db')
const userRouter = require('./routes/user-router')
const movieRouter = require('./routes/movie-router')


const app = express()
const apiPort = 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'build')));


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

//Static file declaration







app.use('/api', userRouter)

if (process.env.NODE_ENV === 'development') {
  console.log("In development")
  app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})
}

//production mode
if (process.env.NODE_ENV === 'production') {
  console.log("In production")
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = '/client/build/index.html'));
})}

//build mode



app.listen(process.env.PORT || apiPort, () => console.log(`Server running on port ${apiPort}`))
