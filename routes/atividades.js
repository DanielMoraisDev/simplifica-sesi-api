const router = require('express').Router()

const atividadeController = require('../controllers/atividadeController.js')

router.route('/atividades').post((req, res) => {
    return atividadeController.create(req, res)
})

module.exports = router