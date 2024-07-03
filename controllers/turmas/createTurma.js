const TurmaModel = require('../../models/Turmas.js')

const createTurma = async (req, res) => {
    try {
        const turma = {
            ano: req.body.ano,
            identificador: req.body.identificador
        }

        if (turma.ano != "3") {
            res.status(500).json({ message: "No momento não há como utilizar outro valor a não ser '3'" })
            return
        }

        const isTurmaExistent = await TurmaModel.findOne({ identificador: turma.identificador, ano: turma.ano })

        if (isTurmaExistent) {
            res.status(500).json({ message: "Essa turma já está registrada" })
            return
        }

        const turmaCreated = await TurmaModel.create(turma)

        res.status(201).json({ turmaCreated, message: "Turma criada com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER TURMA CREATE] Error: ' + error)
    }
}

module.exports = {
    createTurma
}