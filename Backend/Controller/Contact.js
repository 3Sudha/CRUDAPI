const AllData = require("../models/schema.js");
//Get all Contacts 
exports.getcontact= async(req,res)=>{
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
}

//Get Contact By id
exports.getContactId= async(req,res)=>{
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
}
//Create Contact
exports.createcontact= async(req,res)=>{
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
}

//Update Contacts
exports.updateContactsId= async(req,res)=>{
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
}

//Delete Contacts
exports.deleteContactId= async(req,res)=>{
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
  }