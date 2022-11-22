const express = require('express')
const app = express()

app.use(express.static('public_resources'));

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.get('/home', (req, res) => {
    res.render('home.ejs')
})

app.all('/', (req, res) => {
    res.render('home.ejs')
})

app.listen(process.env.PORT || 3000)