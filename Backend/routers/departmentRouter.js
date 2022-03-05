const express=require("express");
const Department = require('../controllers/departmentController');
const router=express.Router()

router.get('/department/list',Department.getDepartments)
router.get('/department/list/:id',Department.getDepartmentById)
router.post('/department/add',Department.createDepartment)
router.put('/department/update',Department.updateDepartment)
router.delete('/department/delete/:id',Department.deleteDepartment)

module.exports = router;
