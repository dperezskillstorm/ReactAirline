const Flight = require('../models/flight.model');

const createFlight = async ({ id,flightNumber, departureDate, arrivalDate, 
     departureAirport, arrivalAirport, currentPassengers, passengerLimit }) => {
    try {
        const flight = new Flight({
            id,
            flightNumber,
            departureDate,
            arrivalDate,
            departureAirport,
            arrivalAirport,
            currentPassengers,
            passengerLimit
        }); // This alone does not save to the database, this just simply prepares for the database
        await flight.save(); // Saves the newly created movie to the database

        return flight._id; // Return the id of the newly created. Could also return the entire object
    }
    // This catch will occur if any of the values are up to standard
    catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

//Changed flightById to Find Flight By Flight Number

const findFlightById = async _id => {
    try {
        const flight = await Flight.findById({_id});
        if (flight == null) {
            throw `No Flight with the id of ${_id} found.`;
        }
        return flight;
    } catch (err) {
        console.error(err);
        throw { status: 404, message: `No Flight with the id of ${_id} found.` }; 
    }
}



const findAllFlights = async (limit = 0) => {
    const flight = await Flight.find(); 
    return flight;
}


const updateFlight = async ({
    _id,
    flightNumber,
    departureDate,
    arrivalDate,
    departureAirport,
    arrivalAirport,
    currentPassengers,
    passengerLimit }) => {

    try {
        const updates = {
            flightNumber,
            departureDate,
            arrivalDate,

            departureAirport,
            arrivalAirport,
            currentPassengers,
            passengerLimit
        };

        const updatedFlight = await Flight.findByIdAndUpdate({_id},updates,{new:true});
        return updatedFlight
    } catch (err) {
        console.error(err);
        throw { status: 404, message: "notUpdating",flightNumber }; 
    }
}

//This controller pushes passenger to flight, so we can have a manifest of passengers
const addPassenger = async ({
    _id,
    passengers }) => {
    try {
        const updates = {
             passengers

        };

        const addPassenger = await Flight.findByIdAndUpdate({_id},{$push:updates},{new:true});
        return addPassenger
    } catch (err) {
        console.error(err);
        throw { status: 404, message: "notAdding Passenger",flightNumber }; 
    }
}



const deleteFlight = async flightNumber => {
    try {
        const flight = await Flight.findOne({flightNumber:flightNumber});
        if (flight == null) {
            throw `No Flight with the id of ${flightNumber} found.`;
        }
        return flight.remove();
    } catch (err) {
        console.error(err);
        throw { status: 404, message: "notworking" }; 
    }
}





module.exports = { createFlight, findFlightById, findAllFlights, updateFlight, deleteFlight,addPassenger };