const router = require('express').Router();
const  { createPassenger, findPassengerById, findAllPassengers, updatePassenger, deletePassenger } = require('../controllers/passenger.controller');


router.get('/', async(req,res) => {
    const passengers = await findAllPassengers();
    res.json(passengers);
})

router.post('/', async (req,res) => {
    try {
        const passengerId = await createPassenger(req.body);
        res.status(201).json({_id: passengerId});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    try {
        const passenger = await findPassengerById(req.params.id);
        res.json(passenger);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

//added delete method
router.delete('/:id', async (req, res) => {
    try {
        const passenger = await deletePassenger(req.params.id);
        res.json(passenger);
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const updatedpassenger = await updatePassenger(req.body);
        res.status(201).json({updatedpassenger});
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
})



module.exports = router;