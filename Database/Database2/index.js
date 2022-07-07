const cors = require('express-cors')
const express = require('express');
const mongoose = require('mongoose'
);
const logger = require('./middleware/logger');
require('dotenv').config(); //one and done


const app = express();
const PORT = process.env.PORT || 8080; //default to 8080 if not in .env



// middleware that auto parses JSON
app.use(express.json());
app.use(logger);

//Added a different method of CORS 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// this binds a router object to the url /flight
app.use('/flight', require('./routes/flight.route.js'))
app.use('/passenger', require('./routes/passenger.route.js'))

app.all('*', (req, res) => {
    res.status(404).send('We don\'t have the resource you\'re looking for.');
});

mongoose.connect(process.env.MONGO_URI)
    .then( () => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error(err);
        // Options
        // Connect to fallback database
        // OR
        // Terminate process
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

