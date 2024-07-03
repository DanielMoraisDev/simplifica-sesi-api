const AtividadeModel = require("../../models/Atividades.js")

const getAllAtividades = async (req, res) => {
    try {
        const atividades = await AtividadeModel.find()

        res.status(200).json(atividades)
    } catch (error) {
        console.log('[CONTROLLER ATIVIDADE GET ALL] Error: ' + error)
    }
}

module.exports = {
    getAllAtividades
}