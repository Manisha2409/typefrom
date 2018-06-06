const request = require('request');

const formModel = require('../models/form.models');
const checking_resources =  require('./resources');
const structure = require('./struct');
module.exports = {
    // createForm: (req,res)=>{
    //     const data = {
    //         username: req.body.username,
    //         password: req.body.password
    //     }

    //    formModel.saveForm(data)
    //     .then((data)=>{
    //         res.send(data);
    //     });
    // },
    create : (req,res) => {
      checking_resources.check();
      var encoded_image = checking_resources.add_image(req.body.image)
      var image_request = {
        "image": encoded_image,
        "file_name": "first.gif"
      }
      request({
          url: "https://api.typeform.com/images",
          method: "POST",
          json:image_request
      },(err,response,body)=>{
          if(err)
              console.log("Error: ",err);
          else
            console.log('Image added successfully');
      })

//hlo

        const data = structure;
      var url = "https://api.typeform.com/forms";
       
      request({
          url: url,
          method: "POST",
          json: data
      },(err,response,body)=>{
                if(err)
                   console.log("Error: ", err );
                else
                    console.log("Body is ready now");
              });           
    }
}