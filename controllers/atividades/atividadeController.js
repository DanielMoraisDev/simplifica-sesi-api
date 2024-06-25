const { createAtividade } = require("./createAtividade.js")
const { getAtividade } = require("./getAtividade.js")
const { getAllAtividades } = require("./getAllAtividades.js")
const { updateAtividade } = require("./updateAtividade.js")
const { deleteAtividade } = require("./deleteAtividade.js")
const { deleteAllAtividades } = require("./deleteAllAtividades.js")

const atividadeController = {
    create: createAtividade,
    getOne: getAtividade,
    getAll: getAllAtividades,
    update: updateAtividade,
    delete: deleteAtividade,
    deleteAll: deleteAllAtividades
}

module.exports = atividadeController