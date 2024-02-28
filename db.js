const mongoose = require("mongoose");

const dotenv = require("dotenv").config();


const connectdb = async()=>{
    try {
        const conn = await mongoose.connect(process.env.DATABASE    );
        if(conn){
            console.log("connection seccessfully completed......");
        }
        
    } catch (error) {
        console.log("mongodb not connected not required your url..... for this side.... we are faced some types errors...");
    }

}

module.exports = connectdb;