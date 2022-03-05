const express=require("express");
const { body } = require("express-validator");
const controller=require("../controllers/loginController")
const router=express.Router()

router.post("/login",[
      body('email').isEmail().normalizeEmail().withMessage(`invalid email`),
      body('password').isString().withMessage('invalid input format'),
    ],controller.createLogin);

module.exports=router;