const mongoose = require('mongoose'); // Erase if already required
const bcrypt=require('bcryptjs');
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
      
    },
    lastname:{
        type:String,
        required:true,
      
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    watchlist:[
        {
            type:mongoose.Schema.Types.Array,
            ref:"Stock"
        }
    ],
},{
    timestamps:true,
});
//already defined
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt =await bcrypt.genSaltSync(10);
    this.password=await bcrypt.hash(this.password,salt);
});
//created methods
userSchema.methods.isPasswordMatched=async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

//Export the model
module.exports = mongoose.model('User', userSchema);