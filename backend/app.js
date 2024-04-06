const express = require('express');
const app=express();
const medicine_details = require('./routes/Medicine');

const PORT = 5000

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json('Jai Siya Ram')
})

app.use('/api/v1/medicine',medicine_details)


app.listen(PORT , (req,res)=>{
    console.log("Server is Listening at port 5000...........")
})