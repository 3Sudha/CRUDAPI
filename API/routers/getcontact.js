const express= require('express');
const router= new express.Router();
const AllData = require("../models/schema.js");

//Get Data
router.get("/getcontact", async(req,res)=>{
   try
   {
      const getContacts = await AllData.find({});
      console.log(getContacts);
      res.status(200).send(getContacts);
   }
   catch(e)
   {
      res.status(400).send(e);
   }
 })
 
//Get Data by individual Id
router.get("/getcont/:id", async(req,res)=>{
   try
   {
      const _id= req.params.id;
      const getContactsId = await AllData.findById(_id);
      res.send(getContactsId);
   }
   catch(e)
   {
      res.status(400).send(e);
   }
})
 
module.exports = router;