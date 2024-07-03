const AvisoModel = require("../../models/Avisos")
const RepresentanteModel = require("../../models/Representantes")

const { verifyID } = require("../functions/verifyID")

const updateAviso = async (req, res) => {
    try {
        const id = req.params.id
        const representanteID = req.body.representante_id

        verifyID(req, res, representanteID, RepresentanteModel, "", "true")

        const aviso = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            $push: { links: { $each: req.body.links } }
        }

        const updatedAviso = await AvisoModel.findOneAndUpdate(
            { _id: id }, 
            aviso,   
            { new: true }
        );

        if (!updatedAviso) {
            res.status(404).json({ message: "Aviso não encontrado"})
            return
        }

        res.status(200).json({aviso, updatedAviso, message: "Aviso atualizado com sucesso"})
    } catch (error) {
        console.log("[CONTROLLER AVISO UPDATE] Error: " + error)
    }
}

module.exports = {
    updateAviso
}