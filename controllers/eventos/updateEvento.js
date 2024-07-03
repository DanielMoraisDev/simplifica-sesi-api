const EventoModel = require('../../models/Eventos.js');
const RepresentanteModel = require('../../models/Representantes.js')
const { verifyID } = require('../functions/verifyID.js')

const updateEvento = async (req, res) => {
    try {
        const id = req.params.id
        const representanteID = req.body.representante_id

        verifyID(req, res, representanteID, RepresentanteModel, "", "true")

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

module.exports = {
    updateEvento
}