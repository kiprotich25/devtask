const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {type:String , required: true },
    description: {type:String},
    completed: {type: Boolean, default: false},

    author: {type: mongoose.Schema.Types.ObjectId, ref:"User" ,required:true}


})
module.exports= mongoose.model('Task', taskSchema)