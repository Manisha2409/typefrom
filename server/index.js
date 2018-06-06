const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const request = require('request');

const router = express.Router();

const app = express();

// request method example

// console.log("App GET Method is working");
//     request(url,(err,response,body)=>{
//         if(err)
//            console.log("Error: ", err );
//         else
//             console.log("Body is ready now");
//       });
      


// mongoose.connect('mongodb://localhost/Forms',(err)=>{
//     if(!err){
//         console.log('Mongodb Connected');
//     }
// });

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ useNewUrlParser: true}))

// app.use(bodyParser.json({ limit: '20mb' }));
// app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

const forms = require('./routes/forms.route')(router);
// app.use('/dummy',forms);

app.use('/',forms);

app.listen(3000,(err)=>{
    console.log('Server Started at the port 3000');
})