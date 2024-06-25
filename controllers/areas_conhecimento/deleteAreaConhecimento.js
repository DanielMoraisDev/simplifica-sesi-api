const AreaDoConhecimentoModel = require("../../models/AreaDoConhecimento.js")

const { verifyID } = require("../functions/verifyID")

const deleteAreaConhecimento = async (req, res) => {
    try {
        const id = req.params.id

        verifyID(req, res, id, AreaDoConhecimentoModel, "area do conhecimento")

        const deletedAreaDoConhecimento = await AreaDoConhecimentoModel.findByIdAndDelete(id)

        res.status(200).json({deletedAreaDoConhecimento, message: "Area do conhecimento deletada"})
    } catch (error) {
        console.log('[CONTROLLER AREA CONHECIMENTO DELETE] Error: ' + error)
    }
}

module.exports = {
    deleteAreaConhecimento
}