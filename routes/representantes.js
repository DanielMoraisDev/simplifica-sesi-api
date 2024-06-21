const router = require('express').Router()

const representanteController = require('../controllers/representanteController.js')

router.route('/representantes').post((req, res) => {
    return representanteController.create(req, res)
})

router.route('/representante/:id').get((req, res) => {
    return representanteController.getOne(req, res)
})

router.route('/representantes/:key').delete((req, res) => {
    return representanteController.deleteAll(req, res)
})

router.route('/representante/:id').delete((req, res) => {
    return representanteController.delete(req, res)
})

module.exports = router