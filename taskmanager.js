const express = require('express');
const tasks = require('./taskroutes/tasks')
const app = express();
const connectToDb = require('./db/connect')
require('dotenv').config()
// middleware
app.use(express.json());

//routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

const port = 3000
/* ONE WAY TO DO THIS 
connectToDb()
.then(()=>{
    console.log('Connected To Db');
})
.then(()=>{
    app.listen(port,console.log(`Server is listening on port ${port}...`))
})*/

// Second way to do this 
const start = async() => {
    await connectToDb(process.env.MONGO_URI);
    app.listen(port,console.log(`Server is listening on port ${port}...`));
}

start();
