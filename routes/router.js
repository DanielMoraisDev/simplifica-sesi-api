const router = require('express').Router()

const turmasRouter = require('./turmas.js')
router.use('/', turmasRouter)

module.exports = router;
