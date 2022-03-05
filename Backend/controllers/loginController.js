const {validationResult}=require("express-validator");
const User = require("./../Models/userModel");


exports.createLogin = async (req, res, next) => {
    //login process will be here
    const userRegisterData = req.body;
  
    const { email, password } = userRegisterData;
  
    try {
      await validationResult(req);
      //if all are ok
      let user = await User.findOne({
        email: email,
      });
  console.log(user)
      if (user) {
        //if user found
        //check the user password and the found in database
        let userPassword = user.password;
        if (userPassword === password) {
          res.status(200).json({
            success: true,
            data: user,
          });
        } else {
          throw 'invalid user email or password !';
        }
      } else {
        throw 'invalid email address';
      }
    } catch (error) {
      console.log(error);
      next(error, req, res);
    }
  };