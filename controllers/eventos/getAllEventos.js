const EventoModel = require('../../models/Eventos.js');

const getAllEventos = async (req, res) => {
    try {
        const eventos = await EventoModel.find()

        res.status(200).json(eventos)
    } catch (error) {
        console.log('[CONTROLLER EVENTO GET ALL] Error: ' + error)
    }
}

module.exports = {
    getAllEventos
}