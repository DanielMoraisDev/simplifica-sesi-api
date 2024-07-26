const { createRepresentante } = require('./createRepresentante.js')
const { getRepresentante } = require('./getRepresentante.js')
const { deleteRepresentante } = require('./deleteRepresentante.js')
const { deleteAllRepresentantes } = require('./deleteAllRepresentantes.js')
const { getAllRepresentantes } = require('./getAllRepresentantes.js')

const representanteController = {
    create: createRepresentante,
    getOne: getRepresentante,
    delete: deleteRepresentante,
    deleteAll: deleteAllRepresentantes,
    getAll: getAllRepresentantes
}

module.exports = representanteController