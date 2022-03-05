const mongoose=require("mongoose");

//1- create validation Schema
const StudentModel=new mongoose.Schema({
    _id:{type : Number,required: true},
    fullName:{type:String, required: true}, ///regexp/
    department_id:{ type:Number, required: true, ref:"departments"}
})

//2- Mapping   schema connected collection ?

module.exports=mongoose.model("students",StudentModel);