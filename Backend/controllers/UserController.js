const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require("bcrypt")
const createToken = require('../helper/createToken')

const UserController = {
    register : async (req, res) => {
        try {
            const { username, email, password, cpassword,country } = req.body;
            let user = await User.register(username,email,password,cpassword,country)

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    
    login : async (req,res) =>{
        try{
            let{email,password} = req.body;
            let user = await User.login(email,password)
            let token = createToken(user._id)
            res.cookie('jwt',token,{httpOnly :true, maxAge : 3*24*60*60*1000});
            return res.json({ user,token });
        }catch(e){
            return res.status(400).json({error:e.message})

        }

        
    }
}

module.exports = UserController