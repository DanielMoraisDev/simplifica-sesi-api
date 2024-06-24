const { default: mongoose } = require('mongoose')
const RepresentanteModel = require('../../models/Representantes.js')

const { verifyID } = require("../functions/verifyID.js")

const getRepresentante = async (req, res) => {
    try {
        const id = req.params.id

        verifyID(req, res, id, RepresentanteModel)

        const representante = await RepresentanteModel.findById(id)

        res.status(200).json({ representante })
    } catch (error) {
        console.log('[CONTROLLER REPRESENTANTE GET ONE] Error: ' + error)
    }
}

module.exports = {
    getRepresentante
}