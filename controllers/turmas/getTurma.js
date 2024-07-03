const TurmaModel = require('../../models/Turmas.js')

const getTurma = async (req, res) => {
    try {
        const id = req.params.id

        const turma = await TurmaModel.findById(id)

        if (!turma) {
            return res.status(500).json({ message: "Turma não encontrada" })
        }

        res.status(200).json({ turma })
    } catch (error) {
        console.log('[CONTROLLER TURMA GET ONE] Error: ' + error)
    }
}

module.exports = {
    getTurma
}