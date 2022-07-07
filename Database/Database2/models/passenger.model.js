//schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const passengerSchema = new Schema({
    
    firstName: {
        type: String,
        required: true
     
    },
    lastName: {
        type: String,
        required: true
    },
    bookingNumber: {
        type: String,
        required: false
    },
    DOB: {
        type: String,
        required: true
    },
    countryOfOrigin: {
        type: String,
        required: true
    }
});

// Model Name | Schema Object | Collection Name in Atlas

const Passenger = mongoose.model('Passenger', passengerSchema, 'Passengers');
module.exports = Passenger;


