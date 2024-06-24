const mongoose = require('mongoose');

const TurmaModel = require('../models/Turmas.js')
const AtividadeModel = require('../models/Atividades.js');
const { verifyRepresentanteID } = require('./functions/verifyRepresentanteID.js')

const keyAdmin = require('../admin/key.js');

const createAtividade = async (req, res) => {
    try {
        const turmaId = new mongoose.Types.ObjectId(req.body.turma_id);
        const representanteID = req.body.representante_id

        verifyRepresentanteID(req, res, representanteID)

        const atividade = {
            turma_id: turmaId,
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            inicio: req.body.inicio,
            fim: req.body.fim,
            habilidades: req.body.habilidades,
            competencias: req.body.competencias,
            links: req.body.links
        }

        const isTurmaExistent = await TurmaModel.findById(atividade.turma_id)

        if(!isTurmaExistent) {
            return res.status(404).json({ message: "Turma não encontrada" })
        }

        const atividadeCreated = await AtividadeModel.create(atividade)

        const atividadeId = atividadeCreated._id

        const turmaUpdate = await TurmaModel.findOneAndUpdate(
            { _id: req.body.turma_id }, 
            { $push: { atividades: { atividade_id: atividadeId } } },
            { new: true } 
        )

        if (!turmaUpdate) {
            return res.status(404).send({ message: 'Houve um erro ao tentar atualizar a turma' });
        }

        res.status(201).json({atividadeCreated, message: "Atividade criada com sucesso"})
    } catch (error) {
        console.log('[CONTROLLER ATIVIDADE CREATE] Error: ' + error)
    }
}

const getAtividade = async (req, res) => {
    try {
        const id = req.params.id

        const atividade = await AtividadeModel.findById(id)

        if (!atividade) {
            return res.status(500).json({ message: "Atividade não encontrada" })
        }

        res.status(200).json({ atividade })
    } catch (error) {
        console.log('[CONTROLLER ATIVIDADE GET ONE] Error: ' + error)
    }
}

const getAllAtividades = async (req, res) => {
    try {
        const atividades = await AtividadeModel.find()

        res.status(200).json(atividades)
    } catch (error) {
        console.log('[CONTROLLER ATIVIDADE GET ALL] Error: ' + error)
    }
}

const updateAtividade = async (req, res) => {
    try {
        const id = req.params.id
        const representanteID = req.body.representante_id

        verifyRepresentanteID(req, res, representanteID)

        const atividade = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            inicio: req.body.inicio,
            fim: req.body.fim,
            habilidades: req.body.habilidades,
            competencias: req.body.competencias,
            $push: { links: { $each: req.body.links } }
        }

        const updatedAtividade = await AtividadeModel.findOneAndUpdate(
            { _id: id }, 
            atividade,   
            { new: true }
        );

        if (!updatedAtividade) {
            res.status(404).json({ message: "Atividade não encontrada"})
            return
        }

        res.status(200).json({atividade, updatedAtividade, message: "Atividade atualizada com sucesso"})
    } catch (error) {
        console.log("[CONTROLLER ATIVIDADE UPDATE] Error: " + error)
    }
}

const deleteAtividade = async (req, res) => {
    try {
        const id = req.params.id

        const atividade = await AtividadeModel.findById(id)

        if (!atividade) {
            res.status(404).json({ message: "Atividade não encontrada" })
        }

        await TurmaModel.updateOne(
            { _id: atividade.turma_id }, 
            { $pull: { atividades: { atividade_id: id } } } 
        );
        const deletedAtividade = await AtividadeModel.findByIdAndDelete(id)

        res.status(200).json({deletedAtividade, message: "Atividade deletada"})
    } catch (error) {
        console.log('[CONTROLLER ATIVIDADE DELETE] Error: ' + error)
    }
}

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

const atividadeController = {
    create: createAtividade,
    getOne: getAtividade,
    getAll: getAllAtividades,
    update: updateAtividade,
    delete: deleteAtividade,
    deleteAll: deleteAllAtividades
}

module.exports = atividadeController