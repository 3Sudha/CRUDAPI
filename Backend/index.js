const express= require("express");
require("./db/conn");
const validator=require('validator');
const Contact= require('./Controller/Contact');
const cors= require('cors');

const app= express();

app.use(express.json());
app.use(cors());
app.post("/createcontact",Contact.createcontact);
app.get("/getcontact",Contact.getcontact); 
app.get("/getcontact/:id", Contact.getContactId);
app.patch("/updatecontact/:id",Contact.updateContactsId);
app.delete("/deletecontact/:id",Contact.deleteContactId);


app.listen(8080, ()=>{
   console.log("Server is running on Localhost:8080");
}) 