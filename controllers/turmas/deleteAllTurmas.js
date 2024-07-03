const TurmaModel = require('../../models/Turmas.js')

const keyAdmin = require('../../admin/key.js')

const deleteAllTurma = async (req, res) => {
    try {
        const keyUrl = req.params.key

        if(keyUrl != keyAdmin) {
            return res.status(500).json({ message: "Senha incorreta, não será possível deletar as turmas" })
        }
        
        const deletedTurmas = await TurmaModel.deleteMany({})

        res.status(200).json({ deletedTurmas, message: "Turmas excluídas com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER TURMA DELETE ALL] Error: ' + error)
    }
}

module.exports = {
    deleteAllTurma
}