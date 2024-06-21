const TurmaModel = require('../models/Turmas.js')

const keyAdmin = require('../admin/key.js')

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

        const response = await TurmaModel.create(turma)

        res.status(201).json({ response, message: "Turma criada com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER TURMA CREATE] Error: ' + error)
    }
}

const getAllTurmas = async (req, res) => {
    try {
        const turmas = await TurmaModel.find()

        res.status(200).json(turmas)
    } catch (error) {
        console.log('[CONTROLLER TURMA GET ALL] Error: ' + error)
    }
}

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

const turmaController = {
    create: createTurma,
    getAll: getAllTurmas,
    delete: deleteTurma,
    deleteAll: deleteAllTurma
}

module.exports = turmaController