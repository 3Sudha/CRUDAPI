const express=require('express');
const mongoose=require('mongoose');
const validator=require('validator');


const myData= new mongoose.Schema({
    Name: {
        type:String,
        required:true,
        unique:true,
        minLength:3,
        maxLength:20
        
    },

    email: {
        type:String,
        required:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new  Error("Email validation failed");
            }
        }
        
    },

    Phone : {
        type:Number,
        required:true,
        unique:true
        
    },

    
    Contact_Owner : {
        type:String,
        required:true,
        
       
    },

})

const AllData= new mongoose.model("AllData", myData);
module.exports = AllData;