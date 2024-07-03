const AvisoModel = require("../../models/Atividades.js")
const TurmaModel = require("../../models/Turmas.js")

const { verifyID } = require("../functions/verifyID")

const deleteAviso = async (req, res) => {
    try {
        const id = req.params.id

        verifyID(req, res, id, AvisoModel, "aviso")

        const aviso = await AvisoModel.findById(id)

        await TurmaModel.updateOne(
            { _id: aviso.turma_id }, 
            { $pull: { avisos: { aviso_id: id } } } 
        );
        const deletedAviso = await AvisoModel.findByIdAndDelete(id)

        res.status(200).json({deletedAviso, message: "Aviso deletado"})
    } catch (error) {
        console.log('[CONTROLLER AVISO DELETE] Error: ' + error)
    }
}

module.exports = {
    deleteAviso
}