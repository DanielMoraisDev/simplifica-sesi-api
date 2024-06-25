const { createRepresentante } = require('./createRepresentante.js')
const { getRepresentante } = require('./getRepresentante.js')
const { deleteRepresentante } = require('./deleteRepresentante.js')
const { deleteAllRepresentantes } = require('./deleteAllRepresentantes.js')

const representanteController = {
    create: createRepresentante,
    getOne: getRepresentante,
    delete: deleteRepresentante,
    deleteAll: deleteAllRepresentantes
}

module.exports = representanteController