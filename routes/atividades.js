const router = require('express').Router()

const atividadeController = require('../controllers/atividadeController.js')

router.route('/atividades').post((req, res) => {
    return atividadeController.create(req, res)
})

router.route('/atividades').get((req, res) => {
    return atividadeController.getAll(req, res)
})

router.route('/atividade/:id').get((req, res) => {
    return atividadeController.getOne(req, res)
})

router.route('/atividade/:id').put((req, res) => {
    return atividadeController.update(req, res)
})

router.route('/atividade/:id').delete((req, res) => {
    return atividadeController.delete(req, res)
})

router.route('/atividades/:key').delete((req, res) => {
    return atividadeController.deleteAll(req, res)
})

module.exports = router