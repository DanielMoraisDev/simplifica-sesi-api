const mongoose = require('mongoose');

const TurmaModel = require('../models/Turmas.js')
const AtividadeModel = require('../models/Atividades.js')

const createAtividade = async (req, res) => {
    try {
        const turmaId = new mongoose.Types.ObjectId(req.body.turma_id);

        const atividade = {
            turma_id: turmaId,
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            prazo: req.body.prazo,
            habilidades: req.body.habilidades,
            competencias: req.body.competencias,
            links: req.body.links
        }

        const isTurmaExistent = await TurmaModel.findById(atividade.turma_id)

        if(!isTurmaExistent) {
            return res.status(404).json({ message: "Turma não encontrada" })
        }

        const response = await AtividadeModel.create(atividade)

        const atividadeId = atividade._id

        const turmaUpdate = await TurmaModel.findOneAndUpdate(
            { _id: req.body.turma_id }, 
            { $push: { atividades: { atividade_id: atividadeId } } },
            { new: true } 
        );      
        console.log(turmaUpdate)

        if (!turmaUpdate) {
            return res.status(404).send({ message: 'Houve um erro ao tentar atualizar a turma' });
        }

        res.status(201).json({response, message: "Atividade criada com sucesso"})
    } catch (error) {
        console.log('[CONTROLLER ATIVIDADE CREATE] Error: ' + error)
    }
}

const atividadeController = {
    create: createAtividade
}

module.exports = atividadeController