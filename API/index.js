const express= require("express");
require("./db/conn");
const validator=require('validator');


const router = require("./routers/getcontact.js");
const router1 = require("./routers/createcontact.js");
const router2 = require("./routers/updatecontact.js");
const router3 = require("./routers/deletecontact.js");
const app= express();

app.use(express.json());
app.use(router);
app.use(router1);
app.use(router2);
app.use(router3);

app.listen(8080, ()=>{
   console.log("Server is running on Localhost:8080");
}) 