const express = require('express');
const app=express()

PORT = 5000
app.listen(PORT , (req,res)=>{
    console.log("Server is Listening at port 5000...........");
    
})