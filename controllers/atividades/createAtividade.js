const mongoose = require('mongoose');

const AtividadeModel = require('../../models/Atividades.js')
const TurmaModel = require('../../models/Turmas.js')
const RepresentanteModel = require('../../models/Representantes.js')
const AreaDoConhecimentoModel = require('../../models/AreaDoConhecimento.js')

const { verifyID } = require('../functions/verifyID.js')

const createAtividade = async (req, res) => {
    try {
        const turmaId = new mongoose.Types.ObjectId(req.body.turma_id);
        const areaDoConhecimentoId = new mongoose.Types.ObjectId(req.body.area_do_conhecimento_id)
        const representanteID = req.body.representante_id

        verifyID(req, res, representanteID, RepresentanteModel, "", "true")

        const atividade = {
            representante_id: req.body.representante_id,
            turma_id: turmaId,
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            area_do_conhecimento_id: areaDoConhecimentoId,
            trimestre: req.body.trimestre,
            inicio: req.body.inicio,
            fim: req.body.fim,
            habilidades: req.body.habilidades,
            competencias: req.body.competencias,
            obj_conhecimento: req.body.obj_conhecimento,
            links: req.body.links
        }

        if (atividade .trimestre !== "1º" || atividade.trimestre !== "2º" || atividade.trimestre !== "2º") {
            return res.status(500).json({ message: "Os valores para o trimestre são apenas '1º', '2º' e '3º'" })
        }

        const isTurmaExistent = await TurmaModel.findById(atividade.turma_id)

        if(!isTurmaExistent) {
            return res.status(404).json({ message: "Turma não encontrada" })
        }

        const isAreaDoConhecimentoExistent = await AreaDoConhecimentoModel.findById(atividade.area_do_conhecimento_id)

        if(!isAreaDoConhecimentoExistent) {
            return res.status(404).json({ message: "Area do conhecimento não encontrada" })
        }

        const atividadeCreated = await AtividadeModel.create(atividade)

        const atividadeId = atividadeCreated._id

        const turmaUpdate = await TurmaModel.findOneAndUpdate(
            { _id: req.body.turma_id }, 
            { $push: { atividades: { atividade_id: atividadeId } } },
            { new: true } 
        )

        if (!turmaUpdate) {
            return res.status(404).send({ message: 'Houve um erro ao tentar atualizar a turma' });
        }

        res.status(201).json({atividadeCreated, message: "Atividade criada com sucesso"})
    } catch (error) {
        console.log('[CONTROLLER ATIVIDADE CREATE] Error: ' + error)
    }
}

module.exports = {
    createAtividade
}