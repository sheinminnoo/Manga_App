const mongoose = require('mongoose');
const UserMessage = require('../models/UserMessage');

const UserMessageController = {
    postMessage : async(req,res)=>{
        try{
            let {username,email,message} = req.body;
            let data = await UserMessage.create({
                username,
                email,
                message
            });
            return res.json(data)
        }catch(e){
            return console.log(e)
        }
    }
}

module.exports = UserMessageController