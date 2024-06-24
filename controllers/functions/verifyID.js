const mongoose = require("mongoose")

const verifyID = async (req, res, id, model) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(500).json({ message: "ID não é válido" })
    }

    const ObjectID = new mongoose.Types.ObjectId(id)

    const IsExistent = await model.findById(ObjectID)

    if (!IsExistent) {
        return res.status(500).json({ message: "ID não foi encontrado" })
    } 
}

module.exports = {
    verifyID
}