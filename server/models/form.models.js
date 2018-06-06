const Form = require('../schema/form.schema');

module.exports = {
    saveForm : (data)=>{
        return new Promise((resolve, reject)=>{

            var form = new Form(data);
             
            form.save()
            .then((data)=>{
                resolve(data);
            })
            .catch((err)=>{
                reject(err);
            }) 
        })
    }
}