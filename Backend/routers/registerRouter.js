const express = require("express");
const { body } = require("express-validator");
const Register = require("../controllers/registerController")
const router = express.Router()

router.post("/register",
    [
        body('userEmail').isEmail().normalizeEmail().withMessage(`invalid email`),
        body('userFullName').isString().withMessage('invalid field format'),
        body('password').isString().withMessage(`invalid password format`),
        body('confirmPassword').isString().withMessage(`invalid password format`),
        body('userID').isInt().withMessage(`invalid userID format`),
        body('userType').isString().withMessage('input format error'),
        body('department_id').isInt().withMessage('input format error'),
    ], Register.createRegister);

module.exports = router;