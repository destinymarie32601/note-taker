const express = require('express'); //importing express
const apiRouter = require('./routes/api'); //importing my api router
const htmlRouter = require('./routes/html'); //importing my html router

const PORT = process.env.port || 3001; //creating port
const app = express(); //calling the express app

app.use(express.urlencoded({ extended: true })); //middlewear
app.use(express.static('public'));
app.use(express.json());

app.use('/', htmlRouter); 
app.use('/api', apiRouter);

app.listen(PORT, () => {
    console.log(`App now listening on port ${PORT}`);
  });