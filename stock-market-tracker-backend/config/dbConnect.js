const {default:mongoose}=require("mongoose");
const dbConnect=()=>{
    try {
        const conn=mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connect");
    } catch (error) {
        throw new Error(error);
    }
}
module.exports=dbConnect;