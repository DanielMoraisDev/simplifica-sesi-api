const AtividadeModel = require("../../models/Atividades")

const { verifyID } = require("../functions/verifyID")

const getAtividade = async (req, res) => {
    try {
        const id = req.params.id

        verifyID(req, res, id, AtividadeModel, "atividade")

        const atividade = await AtividadeModel.findById(id)

        res.status(200).json({ atividade })
    } catch (error) {
        console.log('[CONTROLLER ATIVIDADE GET ONE] Error: ' + error)
    } 
}

module.exports = {
    getAtividade
}