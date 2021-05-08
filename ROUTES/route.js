const express = require("express")
const router = express.Router()
const Note = require("../models/model")

router.route("/create").post((req,res) => {
    const name = req.body.name
    const temp = req.body.temp
    const time = req.body.time
    const vaccine = req.body.vaccine
    const notes = req.body.notes
    
    const newContact = new Note({
        name,
        temp,
        time,
        vaccine,
        notes
    })
    newContact.save()
})

module.exports = router