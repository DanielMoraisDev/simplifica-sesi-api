const mongoose = require("mongoose")
const RepresentanteModel = require('../../models/Representantes.js')

const verifyRepresentanteID = async (req, res, id) => {
        const representanteID = id

        if(!mongoose.Types.ObjectId.isValid(representanteID)) {
            return res.status(500).json({ message: "Id do representante não é válido" })
        }

        const representanteObjectID = new mongoose.Types.ObjectId(id)

        const isRepresentanteExistent = await RepresentanteModel.findById(representanteObjectID)

        if (!isRepresentanteExistent) {
            return res.status(500).json({ message: "Representante não foi encontrado" })
        }
}

module.exports = {
    verifyRepresentanteID
}