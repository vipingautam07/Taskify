const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

// PORT = process.env.PORT || 8000

//Mongoose setup
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONN, { useNewUrlParser : true });

//Importing schema from schema.js
const taskSchema = require('./schema');

// const findTasks = require('./Models/findTasks')

//Task Model
const Task = mongoose.model('Task', taskSchema);

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors());

//To fetch all the available tasks
app.get('/all-tasks', (req, res) => {
    Task.find({}, function(err, foundTasks){
        if(!err){
            console.log(foundTasks);
            res.send(foundTasks).status(201);
        }
        else{
            res.send("No tasks found");
            console.log('Error: ' + err);
        }
    })
})

app.post('/fetch-tasks', (req, res) => {
    const status = req.body.status;
    console.log(status);
    Task.find({status: status}, function(err, foundTasks){
        if(!err){
            console.log(foundTasks);
            res.send(foundTasks).status(201);
        }
        else{
            res.send("No tasks found");
            console.log('Error: ' + err);
        }
    })
})

app.post('/delete', (req, res) => {
    body = req.body;
    // console.log(status);

    const { _id , status } = body;

    Task.deleteOne({_id: _id}, function(err){
        if(!err){
            console.log('Task with _id: '+ _id + ' deleted successfully!');
        }
        else{
            console.log(err);
        }
    })

    Task.find({status: status}, function(err, foundTasks){
        if(!err){
            console.log(foundTasks);
            res.send(foundTasks).status(201);
        }
        else{
            res.send("No tasks found");
            console.log('Error: ' + err);
        }
    })

    // res.send('Deleted Succesfully').status(201);
})

app.post('/update-task', (req, res) => {
    body = req.body;

    const { _id , title , description , status , priority } = body;

    Task.updateOne({_id: _id}, {
        $set: {
            title: title,
            description: description,
            priority: priority,
            status: status
        }
    }, function(err) {
        if(!err){
            Task.find({}, function(err, foundTasks){
                if(!err){
                    console.log('Task updated succesfully and Task list returned');
                    res.send(foundTasks).status(201);
                }
                else{
                    console.log('Error: '+err);
                    res.send(err);
                }
            })
        }
        else{
            console.log('Error: '+err);
            res.send(err);
        }
    })
})

//To insert the task in a particular status and return the new list in that status
app.post('/insert', async (req, res) => {
    body = req.body;
    console.log(body);
    const { title, description, status, priority } = body;
    console.log(title + " " + description + " " + status + " " +  priority);

    const task = new Task({
        title: body['title'],
        description: body['description'],
        priority: body['priority'],
        status: body['status'],
    })

    await task.save((err) => {
        if(!err){
            console.log('Inserted Succesfully');
        }
        else{
            console.log('Error : ' + err);
        }
    })

    // foundTask = findTasks({status : body['status']})
    // res.send(foundTask);

    Task.find({status: body['status']}, function(err, foundTasks){
        if(!err){
            console.log(foundTasks);
            res.send(foundTasks).status(201);
        }
        else{
            console.log('Error: ' + err);
        }
    })
});

// PORT = process.env.PORT || 8000

app.listen(8000, () => {
    console.log('Server started successfully on port 8000');
})