const router = require('express').Router()

const eventoController = require('../controllers/eventoController.js')

router.route('/eventos').post((req, res) => {
    return eventoController.create(req, res)
})

router.route('/eventos').get((req, res) => {
    return eventoController.getAll(req, res)
})

router.route('/evento/:id').get((req, res) => {
    return eventoController.getOne(req, res)
})

router.route('/evento/:id').put((req, res) => {
    return eventoController.update(req, res)
})

router.route('/evento/:id').delete((req, res) => {
    return eventoController.delete(req, res)
})

router.route('/eventos/:key').delete((req, res) => {
    return eventoController.deleteAll(req, res)
})

module.exports = router