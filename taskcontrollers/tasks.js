const Task = require('../models/task')

const getAllTasks = async (req,res)=>{
    try{
        allTask = await Task.find({});
        res.status(200).send({allTask});
    }
    catch(error)
    {
        res.status(500).send({msg : error});
    }
    
}

const createNewTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).send({task});
    }
    catch(error)
    {
        res.status(501).send({msg : error});
    }
}

const getSelectedTask = async (req,res)=>{
    const Id = req.params.id ;
    try{
        selectedTask = await Task.findOne({_id : Id});
        if(!selectedTask){
            return res.status(404).send({msg : `No task for Id : ${Id}`});
        }
        res.status(200).send({selectedTask});
    }
    catch(error)
    {
        res.status(500).send({error});
    }
}

const updateSelectedTask = async (req,res)=>{
    try{
        const {id:taskID} = req.params ;
        const task = await Task.findOneAndUpdate({_id : taskID},req.body,{
            new:true , // returns the updated item not the old one
            runValidators :true
        })
        if(!task){
            return res.status(404).send({msg : `No task for Id : ${Id}`});
        }
        res.status(200).send(task);
    }
    catch(error){
        res.status(500).send({msg : error});
    }
}

const deleteSelectedTask = async (req,res)=>{
    const Id = req.params.id ;
    try{
        deletedTask = await Task.deleteOne({_id : Id});
        if(!deletedTask){
            return res.status(404).send({msg : `No task for Id : ${Id}`});
        }
        res.status(200).send({deletedTask});
    }
    catch(error)
    {
        res.status(500).send({msg : error});
    }
}


module.exports = {
    getAllTasks,
    createNewTask,
    getSelectedTask,
    updateSelectedTask,
    deleteSelectedTask
}