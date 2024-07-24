require("dotenv/config")

const TurmaModel = require('../../models/Turmas.js')
const RepresentanteModel = require('../../models/Representantes.js')

const keyAdmin = process.env.KEY

const deleteAllRepresentantes = async (req, res) => {
    try {
        const keyUrl = req.params.key

        if(keyUrl != keyAdmin) {
            return res.status(500).json({ message: "Senha incorreta, não será possível deletar as contas de representante" })
        }
        
        await TurmaModel.updateMany({ $set: { representante: "" } })
        const deletedRepresentantes = await RepresentanteModel.deleteMany({})

        res.status(200).json({ deletedRepresentantes, message: "Representantes excluídos com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER REPRESENTANTE DELETE ALL] Error: ' + error)
    }
}

module.exports = {
    deleteAllRepresentantes
}