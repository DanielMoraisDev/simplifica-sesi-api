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
    }
}, { timestamps: true })

const Turma = mongoose.model("Turma", turmaSchema)

module.exports = Turma