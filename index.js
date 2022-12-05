const express = require("express");
const app = express();

const auth  = require('./routes/auth');
const home  = require('./routes/home');

app.use(express.static('public_resources'));

const morgan = require('morgan')
app.use('/auth', auth);
app.use('/home', home); 

//app.use(morgan('tiny'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.listen(process.env.PORT || 3001);
