const express= require('express');
const router= new express.Router();
const AllData = require("../models/schema.js");

//Delete Contact by id
router.delete("/deletecontact/:id", async(req,res)=>{
   try
   {
      const _id= req.params.id;
      const deleteContactsId = await AllData.findByIdAndDelete(_id);
      res.send(deleteContactsId);
    }
    catch(e)
    {
      res.status(500).send(e);
    }
 })

 module.exports = router;