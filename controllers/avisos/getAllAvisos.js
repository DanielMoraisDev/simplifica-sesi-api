const AvisoModel = require("../../models/Avisos.js")

const getAllAvisos = async (req, res) => {
    try {
        const avisos = await AvisoModel.find()

        res.status(200).json(avisos)
    } catch (error) {
        console.log('[CONTROLLER AVISO GET ALL] Error: ' + error)
    }
}

module.exports = {
    getAllAvisos
}