const express = require('express');
const router = express.Router();
const {getAllTasks,
    createNewTask,
    getSelectedTask,
    updateSelectedTask,
    deleteSelectedTask} = require('../taskcontrollers/tasks')

router.get('/',getAllTasks)
router.post('/',createNewTask)
router.get('/:id',getSelectedTask)
router.patch('/:id',updateSelectedTask)
router.delete('/:id',deleteSelectedTask)

module.exports = router ;