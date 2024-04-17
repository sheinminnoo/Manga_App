const { default: mongoose } = require("mongoose");
const Manga = require("../models/Manga");

const MangasController  = {
    getMangas : async(req,res)=>{
        let mangas = await Manga.find().sort({createdAt : -1})
        return res.json(mangas)
    },

    getMangaByID : async(req,res)=>{
        try{
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.json({Errors : "Not a valid ID"}).status(400)
            };
            let manga = await Manga.findById(id);
            if(!manga){
                return res.json({Errors : "Not found Manga"}).status(404)
            };
            return res.json(manga)
        }catch(e){
            return res.json({Errors : "OOps! , Internet Server Error"}).status(500)
        }
    },

    postManga : async(req,res)=>{
        try{
            let {title,author,genre,description,chapters,rating,status,releaseDate,imageUrl,chapterList,ongoingManga,recommendedManga} = req.body;
            let manga = await Manga.create({
                title,
                author,
                genre,
                description,
                chapters,
                rating,
                status,
                releaseDate,
                imageUrl,
                chapterList,
                ongoingManga,
                recommendedManga
            });
            return res.json(manga)
        }catch(e){
            return res.json({Errors : "OOPS! Internet Server Error"}).status(500)
        }
    },

    patchManga : async(req,res) => {
        try{
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.json({Errros : "Not a valid Id"}).status(400)
            };
            let manga = await Manga.findByIdAndUpdate(id,{
                ...req.body
            });
            if(!manga){
                return res.json({Errors : "Not found Manga"}).status(404)
            };
            return res.json(manga)

        }catch(e){
            return res.json({Errors : "OOPS! Internet Server Error"}).status(500)
        }
    },

    deleteManga : async(req,res) =>{
        try{
            let id = req.params.id;
            if(!mongoose.Types.ObjectId.isValid(id)){
                return res.json({Errors : "Not a valid ID"}).status(400)
            };
            let manga = await Manga.findByIdAndDelete(id)
            if(!manga){
                return res.json({Errors : "Not found Manga"}).status(404)
            };
            return res.json(manga)
        }catch(e){
            return res.json({Errors : "OOPS! Internet Server Error"}).status(500)
        }
    }
}

module.exports = MangasController