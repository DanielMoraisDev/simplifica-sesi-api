const mongoose = require('mongoose');

const AvisoModel = require('../../models/Avisos.js')
const TurmaModel = require('../../models/Turmas.js')
const RepresentanteModel = require('../../models/Representantes.js')

const { verifyID } = require('../functions/verifyID.js')

const createAviso = async (req, res) => {
    try {
        const turmaId = new mongoose.Types.ObjectId(req.body.turma_id);
        const representanteID = req.body.representante_id

        verifyID(req, res, representanteID, RepresentanteModel, "", "true")

        const aviso = {
            representante_id: representanteID,
            turma_id: turmaId,
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            links: req.body.links
        }

        const isTurmaExistent = await TurmaModel.findById(aviso.turma_id)

        if(!isTurmaExistent) {
            return res.status(404).json({ message: "Turma não encontrada" })
        }

        const avisoCreated = await AvisoModel.create(aviso)

        const avisoId = avisoCreated._id

        const avisoUpdate = await TurmaModel.findOneAndUpdate(
            { _id: req.body.turma_id }, 
            { $push: { avisos: { aviso_id: avisoId } } },
            { new: true } 
        )

        if (!avisoUpdate) {
            return res.status(404).send({ message: 'Houve um erro ao tentar atualizar a turma' });
        }

        res.status(201).json({avisoCreated, message: "Aviso criado com sucesso"})
    } catch (error) {
        console.log('[CONTROLLER AVISO CREATE] Error: ' + error)
    }
}

module.exports = {
    createAviso
}