const mongoose=require("mongoose");

//1- create validation Schema
const departmentModel=new mongoose.Schema({
    id:{ type:Number, require:true,unique:true},
    name:{ type:String, require:true,unique:true},
    location:String
})

//2- Mapping   schema connected collection ?

module.exports=mongoose.model("departments",departmentModel);