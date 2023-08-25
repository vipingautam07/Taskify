const mongoose =  require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    priority: String,
})

module.exports = taskSchema;