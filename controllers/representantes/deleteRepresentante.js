const TurmaModel = require('../../models/Turmas.js')
const RepresentanteModel = require('../../models/Representantes.js')

const { verifyID } = require("../functions/verifyID.js")

const deleteRepresentante = async (req, res) => {
    try {
        const id = req.params.id

        verifyID(req, res, id, RepresentanteModel)

        const representante = await RepresentanteModel.findById(id)

        await TurmaModel.updateOne(
            { _id: representante.turma_id }, 
            { $set: { representante: "" } } 
        );
        const deletedRepresentante = await RepresentanteModel.findByIdAndDelete(id)

        res.status(200).json({deletedRepresentante, message: "Conta de representante deletada"})
    } catch (error) {
        console.log('[CONTROLLER REPRESENTANTE DELETE] Error: ' + error)
    }
}

module.exports = {
    deleteRepresentante
}