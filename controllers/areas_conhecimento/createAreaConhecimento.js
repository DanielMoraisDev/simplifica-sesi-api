const AreaDoConhecimentoModel = require("../../models/AreaDoConhecimento.js")

const createAreaConhecimento = async (req, res) => {
    try {
        const areaDoConhecimento = {
            nome: req.body.nome,
            professores: req.body.professores
        }

        const areaDoConhecimentoCreated = await AreaDoConhecimentoModel.create(areaDoConhecimento)

        res.status(201).send({areaDoConhecimentoCreated,  message: "Area do conhecimento criada com sucesso" })

    } catch (error) {
        console.log('[CONTROLLER AREA CONHECIMENTO CREATE] Error: ' + error)
    }
}

module.exports = {
    createAreaConhecimento
}