const router = require('express').Router()

const avisoController = require('../controllers/avisos/avisoController.js')

router.route('/avisos').post((req, res) => {
    return avisoController.create(req, res)
})

router.route('/avisos').get((req, res) => {
    return avisoController.getAll(req, res)
})

router.route('/aviso/:id').get((req, res) => {
    return avisoController.getOne(req, res)
})

router.route('/aviso/:id').put((req, res) => {
    return avisoController.update(req, res)
})

router.route('/aviso/:id').delete((req, res) => {
    return avisoController.delete(req, res)
})

router.route('/avisos/:key').delete((req, res) => {
    return avisoController.deleteAll(req, res)
})

module.exports = router