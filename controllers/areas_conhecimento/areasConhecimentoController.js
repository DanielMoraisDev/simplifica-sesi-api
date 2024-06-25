const { createAreaConhecimento } = require('./createAreaConhecimento.js')
const { getAreaConhecimento } = require('./getAreaConhecimento.js')
const { deleteAreaConhecimento } = require('./deleteAreaConhecimento.js')

const areaConhecimentoController = {
    create: createAreaConhecimento,
    getOne: getAreaConhecimento,
    delete: deleteAreaConhecimento,
}

module.exports = areaConhecimentoController