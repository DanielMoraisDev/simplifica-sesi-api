const { createAviso } = require("./createAviso.js")
const { getAviso } = require("./getAviso.js")
const { getAllAvisos } = require("./getAllAvisos.js")
const { updateAviso } = require("./updateAviso.js")
const { deleteAviso } = require("./deleteAviso.js")
const { deleteAllAvisos } = require("./deleteAllAvisos.js")


const avisoController = {
    create: createAviso,
    getOne: getAviso,
    getAll: getAllAvisos,
    update: updateAviso,
    delete: deleteAviso,
    deleteAll: deleteAllAvisos
}

module.exports = avisoController