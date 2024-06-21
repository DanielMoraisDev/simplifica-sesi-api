const router = require('express').Router()

const turmaController = require('../controllers/turmaController.js')

router.route('/turmas').post((req, res) => {
    return turmaController.create(req, res)
})

router.route('/turmas').get((req, res) => {
    return turmaController.getAll(req, res)
})

router.route('/turmas/:key').delete((req, res) => {
    return turmaController.deleteAll(req, res)
})

router.route('/turma/:id').delete((req, res) => {
    return turmaController.delete(req, res)
})

module.exports = router