const { createAreaConhecimento } = require('./createAreaConhecimento.js')
const { getAreaConhecimento } = require('./getAreaConhecimento.js')
const { deleteAreaConhecimento } = require('./deleteAreaConhecimento.js')
const { getAllAreasConhecimento } = require('./getAllAreasConhecimento.js')

const areaConhecimentoController = {
    create: createAreaConhecimento,
    getOne: getAreaConhecimento,
    getAll: getAllAreasConhecimento,
    delete: deleteAreaConhecimento,
}

module.exports = areaConhecimentoController