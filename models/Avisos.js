const mongoose = require('mongoose')
const { Schema } = mongoose;

const avisosSchema = new Schema({
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

const Avisos = mongoose.model("Avisos", avisosSchema)

module.exports = Avisos