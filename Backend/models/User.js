const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')

const UserSchema = new Schema({
    username : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true
    },

    password : {
        type : String,
        required : true
    },
     country : {
        type : String,
        required : true
     }

})

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@])[A-Za-z\d@]{8,}$/;

UserSchema.statics.register = async function(username, email, password, cpassword, country) {
    let userExist = await this.findOne({ email });
    if (userExist) {
        throw new Error("User already registered");
    }
    if (password !== cpassword) {
        throw new Error("Passwords do not match");
    }
    if (!passwordRegex.test(password)) {
        throw new Error("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@)");
    }
    const salt = await bcrypt.genSalt(); 
    const hashValue = await bcrypt.hash(password, salt);
    const user = await this.create({
        username,
        email,
        password : hashValue,
        country
    });
    return user;
}

UserSchema.statics.login = async function(email,password){
    let user = await this.findOne({email})
    if(!user){
        throw new Error("user doesn't exists")
    }
    let isCorrect = await bcrypt.compare(password,user.password)
    if(isCorrect){
        return user;
    }else{
        throw new Error("Password uncorrect")
    }
}


module.exports = mongoose.model("User",UserSchema)
