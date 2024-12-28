require('dotenv').config()

const express = require('express')

const app = express()

// const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('hii kashaf you are log in ')
})

app.get('/logout', (req, res) => {
    res.send('hii kashaf you are log out ')
})

app.get('/kashaf', (req, res) => {
    res.send('hii kashaf ')
})

app.get('/hii', (req, res) => {
    res.send('hii')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})