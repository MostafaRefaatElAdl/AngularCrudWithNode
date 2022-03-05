const express=require("express");
const Instructor = require('../controllers/instructorController');
const router=express.Router()

router.get('/instructor',Instructor.getInstructors)
//router.post('/instructor',Instructor.createInstructor)
router.put('/instructor',Instructor.updateInstructor)
router.delete('/instructor/:id',Instructor.deleteInstructor)

module.exports = router;
