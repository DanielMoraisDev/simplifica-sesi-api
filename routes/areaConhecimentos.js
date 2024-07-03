const router = require('express').Router()

const areasConhecimentoController = require('../controllers/areas_conhecimento/areasConhecimentoController.js')

router.route('/area-conhecimento').post((req, res) => {
    return areasConhecimentoController.create(req, res)
})

router.route('/area-conhecimento/:id').delete((req, res) => {
    return areasConhecimentoController.delete(req, res)
})

router.route('/area-conhecimento/:id').get((req, res) => {
    return areasConhecimentoController.getOne(req, res)
})

router.route('/areas-conhecimento').get((req, res) => {
    return areasConhecimentoController.getAll(req, res)
})

module.exports = router