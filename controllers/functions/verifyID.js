const mongoose = require("mongoose")

const verifyID = async (req, res, id, model, messagePersona, representante) => {
    if (!mongoose.Types.ObjectId.isValid(id) && representante && messagePersona == "" && representante == "true") {
        return res.status(500).json({ message: "ID do representante não é válido ou está ausente" })
    }else if (!mongoose.Types.ObjectId.isValid(id)) {
        if (messagePersona == "") {
            return res.status(500).json({ message: "ID não é válido" })
        }

        return res.status(500).json({ message: `O id da(o) ${messagePersona} não é válida(o)` })
    }

    const ObjectID = new mongoose.Types.ObjectId(id)

    const IsExistent = await model.findById(ObjectID)

    if (!IsExistent && representante && messagePersona == "" && representante == "true") {
        return res.status(500).json({ message: "ID do representante não foi encontrado" })
    } else if (!IsExistent) {
        if (messagePersona == "") {
            return res.status(500).json({ message: "ID não foi encontrado" })
        }

        return res.status(500).json({ message: `A(o) ${messagePersona} não foi encontrada(o)` })
    } 
}

module.exports = {
    verifyID
}