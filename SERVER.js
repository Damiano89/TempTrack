const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const employeeRoutes = require('./reactapp/src/ROUTES/api');
const guestRoutes = require('./reactapp/src/ROUTES/guestApi');


const app = express();
const PORT = process.env.PORT || 8080;

const MONGODB_URI = 'mongodb+srv://damiano:damiano@temperatures.v8wxh.mongodb.net/Temperatures?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI || 'mongodb://localhost/Temperatures', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on(`connected`, () => {
  console.log(`Mongoose is connected!`);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//HTTP Request
app.use(morgan('tiny'));
app.use('/api', employeeRoutes);
app.use('/guestApi', guestRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to TempTrack." });
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));