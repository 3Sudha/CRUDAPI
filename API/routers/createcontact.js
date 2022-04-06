const express= require('express');
const router= new express.Router();
const AllData = require("../models/schema.js");


//Create Contact
router.post("/createcontact", async(req,res)=>{
    try
    {
       const addingContact = new AllData(req.body);
       //console.log(req.body);
       const insertcontacts= await addingContact.save();
       res.status(200).send(insertcontacts);
    }
    catch(e)
    {
        res.status(401).send(e);
    }
 })
 module.exports = router;