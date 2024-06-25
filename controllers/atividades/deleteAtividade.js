const AtividadeModel = require("../../models/Atividades.js")
const TurmaModel = require("../../models/Turmas.js")

const { verifyID } = require("../functions/verifyID")

const deleteAtividade = async (req, res) => {
    try {
        const id = req.params.id

        verifyID(req, res, id, AtividadeModel, "atividade")

        const atividade = await AtividadeModel.findById(id)

        await TurmaModel.updateOne(
            { _id: atividade.turma_id }, 
            { $pull: { atividades: { atividade_id: id } } } 
        );
        const deletedAtividade = await AtividadeModel.findByIdAndDelete(id)

        res.status(200).json({deletedAtividade, message: "Atividade deletada"})
    } catch (error) {
        console.log('[CONTROLLER ATIVIDADE DELETE] Error: ' + error)
    }
}

module.exports = {
    deleteAtividade
}