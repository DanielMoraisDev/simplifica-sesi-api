const AvisoModel = require("../../models/Avisos.js")

const { verifyID } = require("../functions/verifyID.js")

const getAviso = async (req, res) => {
    try {
        const id = req.params.id

        verifyID(req, res, id, AvisoModel, "aviso")

        const aviso = await AvisoModel.findById(id)

        res.status(200).json({ aviso })
    } catch (error) {
        console.log('[CONTROLLER AVISO GET ONE] Error: ' + error)
    } 
}

module.exports = {
    getAviso
}