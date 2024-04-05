const express = require("express");
const router = express.Router();
const addNoteController = require("../controller/addTask_controller");
router.post("/", addNoteController.addTask);
module.exports = router;
