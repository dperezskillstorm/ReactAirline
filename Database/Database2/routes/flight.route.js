const router = require('express').Router();

const { findFlightById, findAllFlights, createFlight, updateFlight, deleteFlight, addPassenger } = require('../controllers/flight.controller');
const { updateMany } = require('../models/flight.model');


router.get('/', async(req,res) => {
    const flights = await findAllFlights();
    res.json(flights);
})

router.post('/', async (req,res) => {
    try {
        const flightId = await createFlight(req.body);
        res.status(201).json({_id: flightId});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const flight = await findFlightById(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
})
//added delete method
router.delete('/:id', async (req, res) => {
    try {
        const flight = await deleteFlight(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
})

//Update Flights
router.patch('/:id', async (req, res) => {
    try {
        const updatedFlight = await updateFlight(req.body);
        res.status(201).json({ updatedFlight });
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});

router.patch('/addPassenger/:id', async (req, res) => {
    try {
        const passegnerAdded = await addPassenger(req.body);
        res.status(201).json({ passegnerAdded });
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
});




router.put('/:id', async (req, res) => {
    try {
        const flight = await updateFlight(req.params.id);
        res.json(flight);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
})


module.exports = router;