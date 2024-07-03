const deleteTurma = async (req, res) => {
    try {
        const id = req.params.id

        const turma = await TurmaModel.findById(id)

        if (!turma) {
            res.status(404).json({ message: "Turma não encontrada" })
        }

        const deletedTurma = await TurmaModel.findByIdAndDelete(id)

        res.status(200).json({ deletedTurma, message: "Turma excluída com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER TURMA DELETE] Error: ' + error)
    }
}

module.exports = {
    deleteTurma
}