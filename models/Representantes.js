const mongoose = require('mongoose')
const { Schema } = mongoose;

const representanteSchema = new Schema({
    turma_id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Representante = mongoose.model("Representante", representanteSchema)

module.exports = Representante