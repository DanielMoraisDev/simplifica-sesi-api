const mongoose = require('mongoose')
const { Schema } = mongoose;

const eventoSchema = new Schema({
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
    data: {
        type: Date,
        required: true
    },
    local: {
        type: String,
        required: true,
        default: "https://maps.app.goo.gl/XV2hS8tvEmiyXqSc9"
    }
}, { timestamps: true })

const Evento = mongoose.model("Evento", eventoSchema)

module.exports = Evento