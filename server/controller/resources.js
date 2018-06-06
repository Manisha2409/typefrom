const request = require('request');
const base64 = require('base-64');
const check = ()=>{
    request({
        url: 'https://api.typeform.com/images ',
        method: 'GET'
    },(err,response, body)=>{
        if(err)
           console.log("Error here: ", err);
        else
           console.log("Checking response");
    })
}

const add_image = (data)=>{
    console.log('Inside of image checking')
   var encoded_image = base64.encode(data);
   console.log(encoded_image);
   return encoded_image;
}
module.exports = {
   check,
   add_image
}
