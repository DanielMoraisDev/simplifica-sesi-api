const router = require('express').Router()

const atividadeController = require('../controllers/atividadeController.js')

router.route('/atividades').post((req, res) => {
    return atividadeController.create(req, res)
})

router.route('/atividades/:key').delete((req, res) => {
    return atividadeController.deleteAll(req, res)
})

module.exports = router