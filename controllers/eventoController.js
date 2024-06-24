const mongoose = require('mongoose');

const TurmaModel = require('../models/Turmas.js')
const EventoModel = require('../models/Eventos.js');
const { verifyID } = require('./functions/verifyID.js')

const keyAdmin = require('../admin/key.js');

const createEvento = async (req, res) => {
    try {
        const turmaID = new mongoose.Types.ObjectId(req.body.turma_id)
        const representanteID = req.body.representante_id

        verifyID(req, res, representanteID)

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

const getEvento = async (req, res) => {
    try {
        const id = req.params.id

        const evento = await EventoModel.findById(id)

        if (!evento) {
            return res.status(500).json({ message: "Evento não encontrado" })
        }

        res.status(200).json({ evento })
    } catch (error) {
        console.log('[CONTROLLER EVENTO GET ONE] Error: ' + error)
    }
}

const getAllEventos = async (req, res) => {
    try {
        const eventos = await EventoModel.find()

        res.status(200).json(eventos)
    } catch (error) {
        console.log('[CONTROLLER EVENTO GET ALL] Error: ' + error)
    }
}

const updateEvento = async (req, res) => {
    try {
        const id = req.params.id
        const representanteID = req.body.representante_id

        verifyID(req, res, representanteID)

        const evento = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            data: req.body.data,
            local: req.body.local
        }

        const updatedEvento = await EventoModel.findOneAndUpdate(
            { _id: id }, 
            evento,   
            { new: true }
        );

        if (!updatedEvento) {
            res.status(404).json({ message: "Evento não encontrado"})
            return
        }

        res.status(200).json({evento, updatedEvento, message: "Evento atualizado com sucesso"})
    } catch (error) {
        console.log("[CONTROLLER EVENTO UPDATE] Error: " + error)
    }
}

const deleteEvento = async (req, res) => {
    try {
        const id = req.params.id

        const evento = await EventoModel.findById(id)

        if (!evento) {
            res.status(404).json({ message: "Evento não encontrado" })
        }

        await TurmaModel.updateOne(
            { _id: evento.turma_id }, 
            { $pull: { eventos: { evento_id: id } } } 
        );
        const deletedEvento = await EventoModel.findByIdAndDelete(id)

        res.status(200).json({deletedEvento, message: "Evento deletado"})
    } catch (error) {
        console.log('[CONTROLLER EVENTO DELETE] Error: ' + error)
    }
}

const deleteAllEventos = async (req, res) => {
    try {
        const keyUrl = req.params.key

        if(keyUrl != keyAdmin) {
            return res.status(500).json({ message: "Senha incorreta, não será possível deletar os eventos" })
        }
        
        await TurmaModel.updateMany({ $set: { eventos: [] } })
        const deletedEventos = await EventoModel.deleteMany({})

        res.status(200).json({ deletedEventos, message: "Eventos excluídos com sucesso" })
    } catch (error) {
        console.log('[CONTROLLER EVENTO DELETE ALL] Error: ' + error)
    }
}

const eventoController = {
    create: createEvento,
    getOne: getEvento,
    getAll: getAllEventos,
    update: updateEvento,
    delete: deleteEvento,
    deleteAll: deleteAllEventos
}

module.exports = eventoController