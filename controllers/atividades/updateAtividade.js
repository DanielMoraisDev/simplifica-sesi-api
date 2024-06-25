const AtividadeModel = require("../../models/Atividades")
const RepresentanteModel = require("../../models/Representantes")

const { verifyID } = require("../functions/verifyID")

const updateAtividade = async (req, res) => {
    try {
        const id = req.params.id
        const representanteID = req.body.representante_id

        verifyID(req, res, representanteID, RepresentanteModel, "", "true")

        const atividade = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            inicio: req.body.inicio,
            fim: req.body.fim,
            habilidades: req.body.habilidades,
            competencias: req.body.competencias,
            $push: { links: { $each: req.body.links } }
        }

        const updatedAtividade = await AtividadeModel.findOneAndUpdate(
            { _id: id }, 
            atividade,   
            { new: true }
        );

        if (!updatedAtividade) {
            res.status(404).json({ message: "Atividade não encontrada"})
            return
        }

        res.status(200).json({atividade, updatedAtividade, message: "Atividade atualizada com sucesso"})
    } catch (error) {
        console.log("[CONTROLLER ATIVIDADE UPDATE] Error: " + error)
    }
}

module.exports = {
    updateAtividade
}