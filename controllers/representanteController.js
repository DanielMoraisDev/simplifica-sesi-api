const mongoose = require('mongoose');

const TurmaModel = require('../models/Turmas.js')
const RepresentanteModel = require('../models/Representantes.js')

const keyAdmin = require('../admin/key.js')

const createRepresentante = async (req, res) => {
    try {
        const turmaID = new mongoose.Types.ObjectId(req.body.turma_id);

        const representante = {
            turma_id: turmaID,
            nome: req.body.nome,
            senha: req.body.senha
        }

        const isTurmaExistent = await TurmaModel.findById(representante.turma_id)

        if(!isTurmaExistent) {
            return res.status(404).json({ message: "Turma não encontrada" })
        }

        const representanteCreated = await RepresentanteModel.create(representante)

        const representanteID = representanteCreated._id

        const turmaUpdate = await TurmaModel.findOneAndUpdate(
            { _id: req.body.turma_id }, 
            { $set: { representante: representanteID } },
            { new: true } 
        )

        if (!turmaUpdate) {
            return res.status(404).send({ message: 'Houve um erro ao tentar atualizar a turma' });
        }

        res.status(201).json({representanteCreated, message: "Conta de representante criada com sucesso"})
    } catch (error) {
        console.log('[CONTROLLER REPRESENTANTE CREATE] Error: ' + error)
    }
}

const getRepresentante = async (req, res) => {
    try {
        const id = req.params.id

        const representante = await RepresentanteModel.findById(id)

        if (!representante) {
            return res.status(500).json({ message: "Representante não encontrado" })
        }

        res.status(200).json({ representante })
    } catch (error) {
        console.log('[CONTROLLER REPRESENTANTE GET ONE] Error: ' + error)
    }
}

const deleteRepresentante = async (req, res) => {
    try {
        const id = req.params.id

        const representante = await RepresentanteModel.findById(id)

        if (!representante) {
            res.status(404).json({ message: "Representante não encontrado" })
        }

        await TurmaModel.updateOne(
            { _id: representante.turma_id }, 
            { $set: { representante: "" } } 
        );
        const deletedRepresentante = await RepresentanteModel.findByIdAndDelete(id)

        res.status(200).json({deletedRepresentante, message: "Conta de representante deletada"})
    } catch (error) {
        console.log('[CONTROLLER REPRESENTANTE DELETE] Error: ' + error)
    }
}

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

const representanteController = {
    create: createRepresentante,
    getOne: getRepresentante,
    delete: deleteRepresentante,
    deleteAll: deleteAllRepresentantes
}

module.exports = representanteController