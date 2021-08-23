require('dotenv').config()
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
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
// if (process.env.NODE_ENV === 'production') {  app.use(express.static(path.join(__dirname, 'client/build')));
//  app.get('*', (req, res) => {    res.sendfile(path.join(__dirname = '/client/build/index.html'));  })}

 //build mode
 // app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})








app.use('/api', userRouter)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || apiPort, () => console.log(`Server running on port ${apiPort}`))
