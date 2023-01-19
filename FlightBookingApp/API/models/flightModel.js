const mongoose = require('mongoose');
const { Schema } = mongoose;

const flightSchema = new Schema({
    flight_number: {
        type: String,
        required: true,
        unique: true
    },
    airline: {
        type: String,
        required: true
    },
    departure: {
        airport: {
            type: String,
            required: true
        },
        time: {
            type: Date,
            required: true
        },
    },
    arrival: {
        airport: {
            type: String,
            required: true
        },
        time: {
            type: Date,
            required: true
        },
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('flight', flightSchema);

