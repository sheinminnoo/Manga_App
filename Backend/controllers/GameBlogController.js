const mongoose = require('mongoose')
const GameBlog = require('../models/GameBlog')

const GameBlogController = {
    getGameBlogs : async (req,res)=>{
        let blogs = await GameBlog.find().sort({createdAt :-1});
        return res.json(blogs)
    },

    getGameBlog : async (req,res)=>{
        try{
            let id = req.params.id
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({msg:"Not a valid id"})
            }
            let blog = await GameBlog.findById(id);
            if(!blog){
                return res.status(404).json({msg : "Not found Blog"})
            }
            return res.json(blog)
        }catch(e){
            return res.status(500).json({msg:"Internet Server Error"})
        }
    },

    postGameBlog : async (req,res) =>{
        let {title,description,content,company,tags,imageUrl,downloadlink,twitchLink,requirements} = req.body;
        let blogs = await GameBlog.create({
            title,
            description,
            company,
            content,
            tags,
            imageUrl,
            downloadlink,
            twitchLink,
            requirements
        });
        return res.json(blogs)
    },

    deleteGameBlog : async(req,res)=>{
        try{
            let id = req.params.id
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({msg: "Invalid Id"})
            }
            let blog = await GameBlog.findByIdAndDelete(id)
            
            if(!blog){
                return res.status(404).json({msg :"Not found Blog"})
            }
            return res.json(blog)
        }catch(e){
            return res.status(500).json({msg:"Internet server error"})
        }
    },

    updateGameBlog : async (req,res)=>{
        try{
            let id = req.params.id
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.status(400).json({msg:"Not a valid ID"})
            }
            let blog = await GameBlog.findByIdAndUpdate(id,{
                ...req.body
            });
            if(!blog){
                return res.status(404).json({msg:"Not found Blog"})
            }
            return res.json(blog)
        }catch(e){
            return res.status(500).json({msg:"Internet server error"})

        }
    }
}

module.exports = GameBlogController