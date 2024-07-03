const mongoose = require('mongoose');

const TurmaModel = require('../../models/Turmas.js')
const EventoModel = require('../../models/Eventos.js');
const RepresentanteModel = require('../../models/Representantes.js')
const { verifyID } = require('../functions/verifyID.js')

const createEvento = async (req, res) => {
    try {
        const turmaID = new mongoose.Types.ObjectId(req.body.turma_id)
        const representanteID = req.body.representante_id

        verifyID(req, res, representanteID, RepresentanteModel, "", "true")

        const evento = {
            turma_id: turmaID,
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            data: req.body.data,
            local: req.body.local
        }

        const isTurmaExistent = await TurmaModel.findById(evento.turma_id)

        if(!isTurmaExistent) {
            return res.status(404).json({ message: "Turma não encontrada" })
        }

        const eventoCreated = await EventoModel.create(evento)

        const eventoID = eventoCreated._id

        const turmaUpdate = await TurmaModel.findOneAndUpdate(
            { _id: req.body.turma_id }, 
            { $push: { eventos: { evento_id: eventoID } } },
            { new: true } 
        )

        if (!turmaUpdate) {
            return res.status(404).send({ message: 'Houve um erro ao tentar atualizar a turma' });
        }

        res.status(201).json({eventoCreated, message: "Evento criado com sucesso"})
    } catch (error) {
        console.log('[CONTROLLER EVENTO CREATE] Error: ' + error)
    }
}

module.exports = {
    createEvento
}