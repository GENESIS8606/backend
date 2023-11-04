const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://Genesis:Rulerofall@cluster0.r3dixbc.mongodb.net/?retryWrites=true&w=majority")
.then(() => {console.log("data base is connected")})
.catch(err => console.log(err));
let sc=mongoose.Schema;
const studschema = new sc(
    {
        admno:String,
        sname:String,
        age:String
    }
); 
var studmodel = mongoose.model("stud",studschema)
module.exports=studmodel;