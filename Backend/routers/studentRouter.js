const express=require("express");
const Student = require('../controllers/studentController');
const router=express.Router()

router.get('/student',Student.getStudents)
//router.post('/student',Student.createStudent)
router.put('/student',Student.updateStudent)
router.delete('/student/:id',Student.deleteStudent)

module.exports = router;
