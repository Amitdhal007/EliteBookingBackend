const express = require('express');
const mongoose = require('mongoose');
const Flight = require('../models/flightModel'); // import flight schema
const router = express.Router();


// Add a new flight
router.post('/addflight', (req, res) => {
    const newFlight = new Flight(req.body);
    newFlight.save()
        .then(flight => res.json(flight))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get all flights
router.get('/getflights', (req, res) => {

    mongoose.connect(process.env.CONNECTION_URL, function (err, db) {
        if (err) throw err;

        var flightdetails = db.collection('FlightDatabaseCollection');

        flightdetails.find({}).toArray(function (err, result) {
            if (err) {
                res.send(err);
            } else {

                res.send(JSON.stringify(result));
            }
        })

    });

});


// bookflight
router.post('/bookflight', (req, res) => {
    const newFlight = new Flight(req.body);
    newFlight.save()
        .then(flight => res.json(flight))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;




