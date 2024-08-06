const mongoose = require('mongoose')
const { Schema } = mongoose;

const atividadeSchema = new Schema({
    representante_id: {
        type: String,
        required: true
    },
    turma_id: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    area_do_conhecimento_id: {
        type: String,
        required: true
    },
    trimestre: {
        type: String,
        required: true
    },
    inicio: {
        type: Date,
        required: true
    },
    fim: {
        type: Date,
        required: true
    },
    habilidades: {
        type: String,
        required: true
    },
    competencias: {
        type: String,
        required: true
    },
    obj_conhecimento: {
        type: String,
        required: true
    },
    links: {
        type: [{
            link: {
                type: String,
                required: true
            }
        }],
        required: true,
        default: []
    },
}, { timestamps: true })

const Atividade = mongoose.model("Atividade", atividadeSchema)

module.exports = Atividade