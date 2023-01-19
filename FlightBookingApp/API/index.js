const mongoose = require('mongoose');
const users = require('./routes/userRoutes');
const flight = require('./routes/flightRoutes');
const express = require('express');
require('dotenv').config();
const app = express();

mongoose.set('strictQuery', true);


// connection to mongodb
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

app.use(express.json());
app.use('/api/users', users);
app.use('/api/flight', flight);


const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));


 
 
