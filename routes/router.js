const router = require('express').Router()

const turmasRouter = require('./turmas.js')
router.use('/', turmasRouter)

const atividadeRouter = require('./atividades.js')
router.use('/', atividadeRouter)

const eventoRouter = require('./eventos.js')
router.use('/', eventoRouter)

const representanteRouter = require('./representantes.js')
router.use('/', representanteRouter)

const areasConhecimentoRouter = require('./areaConhecimento.js')
router.use('/', areasConhecimentoRouter)

module.exports = router;
