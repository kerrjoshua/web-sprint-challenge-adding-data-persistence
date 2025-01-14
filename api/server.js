const express = require('express')
const projectRouter = require('./project/project-router')
const resourceRouter = require('./resource/resource-router')
const taskRouter = require('./task/task-router')

const server = express()

server.use(express.json())

server.use('/api/projects', projectRouter)

server.use('/api/resources', resourceRouter)

server.use('/api/tasks/', taskRouter)

server.use('*', (req, res) => {
    res.status(404).json({message: 'resource not found'})
})

module.exports = server