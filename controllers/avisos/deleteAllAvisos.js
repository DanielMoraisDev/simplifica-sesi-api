const AvisosModel = require("../../models/Avisos.js")
const TurmaModel = require("../../models/Turmas.js")

const keyAdmin = require('../../admin/key.js')

const deleteAllAvisos = async (req, res) => {
    try {
        const keyUrl = req.params.key

        if(keyUrl != keyAdmin) {
            return res.status(500).json({ message: "Senha incorreta, não será possível deletar os avisos" })
        }
        
        await TurmaModel.updateMany({ $set: { avisos: [] } })
        const deletedAtividades = await AvisosModel.deleteMany({})

        res.status(200).json({ deletedAtividades, message: "Avisos excluídos com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER AVISO DELETE ALL] Error: ' + error)
    }
}

module.exports = {
    deleteAllAvisos
}