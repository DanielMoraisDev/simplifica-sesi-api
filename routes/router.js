const router = require('express').Router()

const turmasRouter = require('./turmas.js')
router.use('/', turmasRouter)

const atividadesRouter = require('./atividades.js')
router.use('/', atividadesRouter)

const eventosRouter = require('./eventos.js')
router.use('/', eventosRouter)

const representantesRouter = require('./representantes.js')
router.use('/', representantesRouter)

const areasConhecimentoRouter = require('./areaConhecimentos.js')
router.use('/', areasConhecimentoRouter)

const avisosRouter = require('./avisos.js')
router.use('/', avisosRouter)

module.exports = router;
