const AreaDoConhecimentoModel = require("../../models/AreaDoConhecimento.js")

const { verifyID } = require("../functions/verifyID.js")

const getAreaConhecimento = async (req, res) => {
    try {
        const id = req.params.id

        verifyID(req, res, id, AreaDoConhecimentoModel, "area do conhecimento")

        const areaDoConhecimento = await AreaDoConhecimentoModel.findById(id)

        res.status(200).json({ areaDoConhecimento })
    } catch (error) {
        console.log('[CONTROLLER AREA DO CONHECIMENTO GET ONE] Error: ' + error)
    } 
}

module.exports = {
    getAreaConhecimento
}