const express = require('express')
const Project = require('./project-model')
const { checkProj } = require('./project-middleware')

const router = express.Router()

router.get('/', (req, res, next) => {
    Project.getProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
})

router.post('/', checkProj, (req, res, next) => {
    Project.addProject(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(next)
})
router.use('*', (err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: "Problem in projects router",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router