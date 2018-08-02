const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


//
const taskRoutes = require('./routes/taskRoutes');

const keys = require('./config/keys');

mongoose.connect(keys.mongoose.mongodbURL);

var db = mongoose.connection;



db.on('error',function (err)
{
  console.log('error on connecting mlab'+err);

})


db.once('open',function ()
{
  console.log('connected to mlab');
})


//middleware for bodyParser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());



//static files
app.use(express.static(path.join(__dirname,'dist/taskApp')));

taskRoutes(app);

app.get('*', function(request,response)
{
   console.log('get * method');
  response.sendFile(path.join(__dirname, 'dist/taskApp/index.html'));

})




app.listen('3000');
console.log('server listen to the port');
