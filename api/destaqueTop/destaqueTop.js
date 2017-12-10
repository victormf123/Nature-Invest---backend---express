const restful = require('node-restful')
const mongoose = restful.mongoose

const categoria = new mongoose.Schema({
    
        name: { type: String, required: true },
        icon: { type: String, required: true },
    
    })
    
    const usuario = new mongoose.Schema({
    
        name: { type: String, required: true },
        email: { type: String, required: true },
    
    })

const destaqueTopSchema = new mongoose.Schema({
    
        _id_campanha: { type: String, required: true },
        titulo: { type: String, required: true },
        orcamento: { type: Number, required: true },
        moeda: ['EUR', 'BRL', 'USD'],
        imagem: { type: String, required: false },
        estado: { type: String, required: true },
        dataInicial:{ type: String, required: true},
        dataFinal:{ type: String, required: true },
        descricao_projeto:{type: String, required: true},
        usuario: usuario,
        categoria: categoria
    })

    module.exports = restful.model('destaqueTop', destaqueTopSchema)