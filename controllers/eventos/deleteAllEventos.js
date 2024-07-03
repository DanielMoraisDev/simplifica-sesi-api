const TurmaModel = require('../../models/Turmas.js')
const EventoModel = require('../../models/Eventos.js');

const keyAdmin = require('../../admin/key.js');

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

module.exports = {
    deleteAllEventos
}