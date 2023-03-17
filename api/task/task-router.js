const express = require('express')
const router = express.Router()

router.use('*', (req, res) => {
    res.json('Hello from tasks router')
})

router.use('*', (err, req, res, next) => {
    res.status(err.status || 500).json({
        customMessage: 'Problem in task router',
        message: err.message,
        stack: err.stack
    })
})

module.exports = router;