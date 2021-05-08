const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require ("mongoose")

app.use(cors())
app.use(express.json())

//connect to mongoose
mongoose.connect("mongodb://127.0.0.1:27017/Employee", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

//require route
app.use("/",require("./routes/route"))


app.listen(3001,function(){
console.log("express server is running on port 3001")
})