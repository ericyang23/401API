const users = require('./users')
const websites = require('./websites')
const data = require('./data')
const websites_has_data = require('./websites_has_data')

const express = require('express')
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
    if (process.env.MODE === 'dev') 
        console.log(
            'Request:',
            'Time ' + new Date().toLocaleTimeString(),
            'Date ' + new Date().toLocaleDateString()
        )
    
    next()
})

router.use('/users', users)
router.use('/websites', websites)
router.use('/data', data)
router.use('/websites_has_data', websites_has_data)

module.exports = router