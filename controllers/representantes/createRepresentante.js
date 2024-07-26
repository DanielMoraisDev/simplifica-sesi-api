const mongoose = require("mongoose")

const TurmaModel = require('../../models/Turmas.js')
const RepresentanteModel = require('../../models/Representantes.js')

const { verifyID } = require("../functions/verifyID")

const keyAdmin = process.env.KEY

const createRepresentante = async (req, res) => {
    try {
        verifyID(req, res, req.body.turma_id, TurmaModel, "turma id")

        const turmaID = new mongoose.Types.ObjectId(req.body.turma_id);

        if(!req.body.key) {
            return res.status(500).json({ message: "É necessário a keyAdmin para criar" })
        }

        if(req.body.key !== keyAdmin) {
           return res.status(500).json({ message: "A keyAdmin está incorreta" })
        }

        const representante = {
            turma_id: turmaID,
            nome: req.body.nome,
            senha: req.body.senha
        }

        const isTurmaExistent = await TurmaModel.findById(req.body.turma_id)

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

module.exports = {
    createRepresentante
}