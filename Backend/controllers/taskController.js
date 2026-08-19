const Task = require("../models/Task")

exports.createTask = async (req, res) => {
    const task = await Task.create({...req.body, owner: req.user.id });
    res.status(201).json(task);
    
   
    
}

exports.getMyTasks = async (req, res) => {
    const tasks = await Task.find({owner: req.user.id})
    res.json(tasks)

};

exports.getAllTasks = async (req, res) =>{
    const tasks = await Task.find().populate("owner", "email username")
    res.json(tasks)
};

exports.updateTask = async (req, res ) =>{
    try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({message: "Task not found"})
    
    if (task.owner.toString() !== req.user.id && req.user.role !== "admin" ) 
        return res.status(401).json({message: "Not permitted to update this task"})
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
     res.status(200).json(updatedTask)
    }
    catch(error){
     return res.json({message: error.message })
    }

};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task) { return res.status(404).json({ message: "Task not found"}) };

        if (task.owner.toString()!== req.user.id && req.user.role !=="admin")
            {return res.status(403).json("Unauthorized to delete this task")};
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({message: "Task deleted successfully"});
    } catch (error) {
        return res.json({ message: error.message})
        
    }

};