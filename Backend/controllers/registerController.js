const User = require("./../Models/userModel");
const Student = require("./../Models/StudentModel");
const Instructor = require('../Models/InstructorModel');
const { validationResult } = require("express-validator");


exports.createRegister = async (req, res, next) => {
  // department.findOne({_id:request.body.department})    
  //validation result
  const userRegisterData = req.body;
  const {
    password,
    confirmPassword,
    email,
    userID,
    FullName,
    userType,
    department_id,
    courses,
  } = userRegisterData;
  //i need to get the data and validate it
  try {
    await validationResult(req);
    //if there's no errors then check for the password is equals to the confirmed password ?
    if (password === confirmPassword) {
      //then the user entered all well
      let newStudent, newInstructor;
      //fill the user document
      let newUser = new User({
        email: email.toLowerCase(),
        password: password,
        userType: userType,
        userID: userID,
      });

      await newUser.save();

      if (userType === 'Student') {
        newStudent = new Student({
          _id: userID,
          fullName: FullName,
          department_id: department_id,
        });
        console.log("Student save")
        await newStudent.save();
        res.status(201).json({
          success: true,
          data: newStudent,
        });
      } else if (userType === 'Instructor') {
        newInstructor = new Instructor({
          _id: userID,
          fullName: FullName,
          department_id: department_id,
          courses: courses,
        });
        console.log("Inst save")
        await newInstructor.save();
        res.status(201).json({
          success: true,
          data: newInstructor,
        });
      } else {
        //throw error
        throw 'cannot recognize user ! .. ';
      }
    } else {
      throw 'please confirm ur password';
    }
  } catch (error) {
    //if an error
    console.log(error);
    next(error, req, res);
  }
};