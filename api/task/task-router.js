const express = require('express')
const Task = require('./task-model')
const { checkTask } = require('./task-middleware')
const router = express.Router()

router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})

router.post('/', checkTask, (req, res, next) => {
    Task.addTask()
        .then((result) =>{ 
            res.json(result + 'finished adding task')
        })
        .catch(next)
})

router.use('*', (err, req, res, next) => {//eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'Problem in task router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;