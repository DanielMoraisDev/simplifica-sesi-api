const TurmaModel = require('../../models/Turmas.js')

const getAllTurmas = async (req, res) => {
    try {
        const turmas = await TurmaModel.find()

        res.status(200).json(turmas)
    } catch (error) {
        console.log('[CONTROLLER TURMA GET ALL] Error: ' + error)
    }
}

module.exports = {
    getAllTurmas
}
