const EventoModel = require('../../models/Eventos.js');

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
        const deletedEvento = await EventoModel.findByIdAdndDelete(id)

        res.status(200).json({deletedEvento, message: "Evento deletado"})
    } catch (error) {
        console.log('[CONTROLLER EVENTO DELETE] Error: ' + error)
    }
}

module.exports = {
    deleteEvento
}