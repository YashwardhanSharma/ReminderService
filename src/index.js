const express = require("express");
const bodyParser = require('body-parser');
const {PORT}=require('./config/serverConfig');

// const {sendBasicEmail}=require('./services/email-service');


const setupAndStartServer = ()=>{
   const app = express();
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));

   app.listen(PORT,()=>{
     console.log(`Server started at PORT ${PORT}`);
    //  sendBasicEmail(
    //   'support@admin.com',
    //   'shubhamjainpvt28@gmail.com ',
    //   'This is a testing email',
    //   'Hey, how are you,I hope you like the support'
    //  )
    
   });
}

setupAndStartServer();