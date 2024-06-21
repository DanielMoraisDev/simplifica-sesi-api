const mongoose = require('mongoose')

const account = 'danielmoraisdev'
const password = 'tm5x4wr2cJrkuskT'

const main = async () => {      
    try {
        await mongoose.connect(`mongodb+srv://${account}:${password}@simplifica-sesi-cluster.ehpklwi.mongodb.net/simplifica-sesi?retryWrites=true&w=majority&appName=simplifica-sesi-cluster`)
        console.log('[MONGODB] Conexão realizada com sucesso!')
    } catch (error) {
        console.log('[MONGODB] Error: ' + error)
    }

}   

module.exports = main