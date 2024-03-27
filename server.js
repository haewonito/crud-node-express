//i got the app from https://medium.com/techvblogs/build-crud-api-with-node-js-express-and-mongodb-e3aa58da3915
// just to practice using docker

const express = require('express'); //this is the framework we are using to build our app
const bodyParser = require('body-parser'); //this is a module that parses the request and creates a req.body object that we can access in our routes.
const app = express(); // we create an express app and add two body-parse middlewares using expresser's app.use() method
app.use(bodyParser.urlencoded({ extended: true })) //add two body-parse middlewares using expresser's app.use() method
app.use(bodyParser.json())
//add the route class
const UserRoute = require('./app/routes/User')
app.use('/user',UserRoute)


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
