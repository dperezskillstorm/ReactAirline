// (1)  First we can import the depedencies using require
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI ="mongodb+srv://root:root@cluster0.tgfjx.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URI)
.then(()=>{
    console.log('Connected To Mongo');
    

})
.catch(err =>{
    console.error(err);
    //Options
    //Fall Back or Terminate Process
    process.exit(1);
})




const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})
console.log("run this cmd")
const newName = "Pss1"
     await Flight.findOneAndUpdate(
    {
    _id: "62c606a42b2b6ebaa234d449",
},
{
    $push:{
passengers: newName,},})