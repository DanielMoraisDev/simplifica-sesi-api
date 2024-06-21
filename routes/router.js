const router = require('express').Router()

const turmasRouter = require('./turmas.js')
router.use('/', turmasRouter)

const atividadeRouter = require('./atividades.js')
router.use('/', atividadeRouter)

module.exports = router;
