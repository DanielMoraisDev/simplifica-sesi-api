const { createEvento } = require('./createEvento.js')
const { getEvento } = require('./getEvento.js')
const { getAllEventos } = require('./getAllEventos.js')
const { updateEvento } = require('./updateEvento.js')
const { deleteEvento } = require('./deleteEvento.js')
const { deleteAllEventos } = require('./deleteAllEventos.js')

const eventoController = {
    create: createEvento,
    getOne: getEvento,
    getAll: getAllEventos,
    update: updateEvento,
    delete: deleteEvento,
    deleteAll: deleteAllEventos
}

module.exports = eventoController