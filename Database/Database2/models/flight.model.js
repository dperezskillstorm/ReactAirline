//schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const flightSchema = new Schema({
    
    flightNumber: {
        type: String,
        required: true,
        unique: true
     
    },
    departureDate: {
        type: String,
        required: false
    },
    arrivalDate: {
        type: String,
        required: false
    },
   
    departureAirport: {
        type: String,
        required: false
    },
    arrivalAirport: {
        type: String,
        required: false
    },
    currentPassengers: {
        type: String,
        required: false
    },
    passengerLimit: {
        type: String,
       // min: [0, 'Passenger cannot be 0'],
      //  max: [20, 'Passenger cannot more than 20'],
        required: false
    },
    passengers:[String],
    



});

// Model Name | Schema Object | Collection Name in Atlas

const Flight = mongoose.model('Flight', flightSchema, 'Flights');
module.exports = Flight;


