const RepresentanteModel = require('../../models/Representantes.js');

const getAllRepresentantes = async (req, res) => {
    try {
        const representantes = await RepresentanteModel.find()

        res.status(200).json(representantes)
    } catch (error) {
        console.log('[CONTROLLER REPRESENTANTES GET ALL] Error: ' + error)
    }
}

module.exports = {
    getAllRepresentantes
}