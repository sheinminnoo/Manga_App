const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserContactSchema = new Schema({
    username : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    message : {
        type : String,
        required : true
    }
},{timestamps : true})

module.exports = mongoose.model("UserContact",UserContactSchema)