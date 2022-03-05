const mongoose = require("mongoose");

//1- create validation Schema
const InstructorModel = new mongoose.Schema({
    _id: { type: Number, required: true },
    fullName: { type : String, required: true }, ///regexp/
    courses:{type: [String]},
    department_id: { type: Number, ref: "departments", required: true }
})

//2- Mapping   schema connected collection ?

module.exports = mongoose.model("Instructor", InstructorModel);