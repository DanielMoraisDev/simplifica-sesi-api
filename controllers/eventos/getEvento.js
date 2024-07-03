const EventoModel = require('../../models/Eventos.js');

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

module.exports = {
    getEvento
}