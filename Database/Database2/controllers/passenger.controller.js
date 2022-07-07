const Passenger = require('../models/passenger.model');

const createPassenger = async ({ id, firstName, lastName, bookingNumber, DOB, countryOfOrigin }) => {
    try {
        const passenger = new Passenger({
            id,
            firstName,
            lastName,
            bookingNumber,
            DOB,
            countryOfOrigin
        }); // This alone does not save to the database, this just simply prepares for the database
        await passenger.save(); // Saves the newly created movie to the database

        return passenger._id; // Return the id of the newly created. Could also return the entire object
    }
    // This catch will occur if any of the values are up to standard
    catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const findPassengerById = async _id => {
    try {
        // If no movie is found, this does NOT return a rejected promise. Instead null is returned
        const passenger = await Passenger.findById(_id);
        if (passenger == null) {
            throw `No passenger with the id of ${_id} found.`;
        }
        return passenger; // Movie was found and we return it
    } catch (err) {
        console.error(err);
        throw { status: 404, message: err }; // Akin to rejecting a Promise
    }
}

const findAllPassengers = async (limit = 0) => {
    const passenger = await Passenger.find(); 
    return passenger;
}


const updatePassenger = async ({
        _id,
        firstName,
        lastName,
        bookingNumber,
        DOB,
        countryOfOrigin }) => {
    
        try {

               
            const updates = {
                firstName,
                lastName,
                bookingNumber,
                DOB,
                countryOfOrigin
            };
            
            const updatedPassenger = await Passenger.findByIdAndUpdate({_id},updates,{new:true});
            console.log(updatedPassenger)
            return updatedPassenger
            
        } catch (err) {
            console.error(err);
            throw { status: 404, message: `Did not Update passegner `}; 
        }
    }


const deletePassenger = async _id => {
    try {
        const passenger = await Passenger.findByIdAndDelete({_id});
        if (passenger == null) {
            throw `No Passenger with the id of ${_id} found.`;
        }
        return passenger.remove();
    } catch (err) {
        console.error(err);
        throw { status: 404, message: "notworking" }; 
    }
}

module.exports = { createPassenger, findPassengerById, findAllPassengers, updatePassenger, deletePassenger };