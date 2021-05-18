const express = require('express');

const router = express.Router();

const GuestTemp = require('../MODELS/guest.model');

router.get('/', (req, res) => {

    GuestTemp.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', daerrorta);
        });
});

router.post('/save', (req, res) => {
    const data = req.body;

    const newGuestTemp = new GuestTemp(data);

    newGuestTemp.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // Post
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});

module.exports = router;