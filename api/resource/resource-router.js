const express = require('express')
const Resource = require('./resource-model')
const {checkResource, resourceNameUnique} = require('./resource-middleware')
const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.getResources()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})
router.post('/', checkResource, resourceNameUnique, (req, res, next) => {
    Resource.addResource(req.body)
        .then( resource => {
            res.json(resource)
        })
        .catch(next)
        
})
router.use('*', (err, req, res, next) => {//eslint-disable-line
    res.status(err.status || 500).json({
        customMessage: 'Problem in resource router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;