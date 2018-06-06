
const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    username: {
        type: String
    },
    password:{
        type: String
    }
    
})

var Form = mongoose.model('Form', schema);

module.exports = Form ;