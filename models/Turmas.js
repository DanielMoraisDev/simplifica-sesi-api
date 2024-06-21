const mongoose = require('mongoose')
const { Schema } = mongoose;

const turmaSchema = new Schema({
    ano: {
        type: String,
        required: true
    },
    identificador: {
        type: String,
        required: true
    },
    eventos: {
        type: [{
            evento_id: {
                type: String,
                required: true
            }
        }],
        required: true,
        default: []
    },
    avisos: {
        type: [{
            aviso_id: {
                type: String,
                required: true
            }
        }],
        required: true,
        default: []
    },
    atividades: {
        type: [{
            atividade_id: {
                type: String,
                required: true
            }
        }],
        required: true,
        default: []
    },
}, { timestamps: true })

const Turma = mongoose.model("Turma", turmaSchema)

module.exports = Turma