const mongoose = require("mongoose");

//1- create validation Schema
const userModel = new mongoose.Schema({
    // _id: ObjectId, will be created by default
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true }, ///regexp/
    userType: {
        type: String,
        enum: ['Student', 'Instructor'],
        required: true
    },
    userID: { type: Number,
        ref: function(){
            console.log(this)
            if (this.userType == "Student"){
                this.ref == "Student"
            }else{
                this.ref == "Instructor"
            }
        }
        ,required: true }
})

//2- Mapping schema connected collection ?

module.exports = mongoose.model("user", userModel);