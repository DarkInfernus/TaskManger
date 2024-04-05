const express=require('express');
const router=express.Router();
const deleteTaskController=require('../controller/deleteTask_controller');
router.post('/',deleteTaskController.deleteTask);
module.exports=router;