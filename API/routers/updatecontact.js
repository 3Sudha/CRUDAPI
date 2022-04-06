const express= require('express');
const router= new express.Router();
const AllData = require("../models/schema.js");

//Update Contacts
router.patch("/updatecontact/:id", async(req,res)=>{
   try
   {
      const _id= req.params.id;
      const updateContactsId = await AllData.findByIdAndUpdate(_id, req.body,
      {
         new:true
      });
       
      res.send(updateContactsId);
    }
    catch(e)
    {
      res.status(500).send(e);
    }
 })
 module.exports =router;