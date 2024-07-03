const { createTurma } = require('./createTurma.js')
const { getTurma } = require('./getTurma.js')
const { getAllTurmas } = require('./getAllTurmas.js')
const { deleteTurma } = require('./deleteTurma.js')
const { deleteAllTurma } = require('./deleteAllTurmas.js')

const turmaController = {
    create: createTurma,
    getOne: getTurma,
    getAll: getAllTurmas,
    delete: deleteTurma,
    deleteAll: deleteAllTurma
}

module.exports = turmaController