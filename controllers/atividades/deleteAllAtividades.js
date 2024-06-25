const AtividadeModel = require("../../models/Atividades")
const TurmaModel = require("../../models/Turmas")

const keyAdmin = require('../../admin/key.js')

const deleteAllAtividades = async (req, res) => {
    try {
        const keyUrl = req.params.key

        if(keyUrl != keyAdmin) {
            return res.status(500).json({ message: "Senha incorreta, não será possível deletar as atividades" })
        }
        
        await TurmaModel.updateMany({ $set: { atividades: [] } })
        const deletedAtividades = await AtividadeModel.deleteMany({})

        res.status(200).json({ deletedAtividades, message: "Atividades excluídas com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER ATIVIDADE DELETE ALL] Error: ' + error)
    }
}

module.exports = {
    deleteAllAtividades
}