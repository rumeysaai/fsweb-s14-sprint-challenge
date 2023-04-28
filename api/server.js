// serverı buraya yazın ve index.js require yazın
const express = require('express');
const ProjectsRouter = require('./project/router');
const ResourcesRouter = require('./resource/router');
const TasksRouter = require('./task/router');

const server = express();
server.use(express.json());
server.use('/api/projects',ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);

server.use('*', (req,res)=>{
    res.status(404).json({ message: "Not Found"})
})

module.exports=server;