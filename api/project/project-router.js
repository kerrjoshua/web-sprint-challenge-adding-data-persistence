const express = require('express')

const router = express.Router()

router.use('*', (req, res) => {
    res.json("Hello from projects router")
})
router.use('*', (err, req, res, next) => { //eslint-disable-line
    res.status(err.statuss || 500).json({
        customMessage: "Problem in projects router",
        message: err.message,
        stack: err.stack
    })
})

module.exports = router