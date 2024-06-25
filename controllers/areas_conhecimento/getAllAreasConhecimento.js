const AreaDoConhecimentoModel = require("../../models/AreaDoConhecimento.js")

const getAllAreasConhecimento = async (req, res) => {
    try {
        const areasDoConhecimento = await AreaDoConhecimentoModel.find()

        res.status(200).json(areasDoConhecimento)
    } catch (error) {
        console.log('[CONTROLLER AREA CONHECIMENTO GET ALL] Error: ' + error)
    }
}

module.exports = {
    getAllAreasConhecimento
}