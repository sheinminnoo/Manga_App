const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Blog = new Schema({
    title : {
        type : String,
        required : true,
    },

    description : {
        type : String,
        required : true
    },

    content : {
        type : String,
        required : true
    },

    company : {
        type : String,
        required : true
    },

    tags : {
        type : Array,
        required : true
    },

    imageUrl : {
        type : String,
        required : true
    },

    downloadlink : {
        type : String,
        required : true
    },

    twitchLink : {
        type : String,
        required : true
    },

    requirements : {
        type : String,
        required : true
    }

},{timestamps : true})

module.exports = mongoose.model("GameBlogs",Blog)