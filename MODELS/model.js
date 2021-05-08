const mongoose = require("mongoose");

const notesSchema = {
    name:String,
    temp:String,
    time:String,
    vaccine:Boolean,
    notes:String
}

const Note = mongoose.model("Details_emp",notesSchema)

module.exports = Note;