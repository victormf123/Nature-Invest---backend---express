/**
 * Created by matheus on 23/09/17.
 */

const restful = require('node-restful')
const mongoose = restful.mongoose


const categoria = new mongoose.Schema({

    name: { type: String, required: true },
    icon: { type: String, required: true },

})

const usuario = new mongoose.Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    img: { type: String, required: false },

})

const equipe = new mongoose.Schema({

    nome: { type: String, required: false },
    email: { type: String, required: false },
    telefone: { type: String, required: false },

})

const recompensa = new mongoose.Schema({
    valor: { type: Number, min: 0, required: false },
    moeda: ['EUR', 'BRL', 'USD'],
    descricao: { type: String, required: false },
    detalhes:{ type: String, required: false },
    limit:{ type: Boolean, required: false },
    valor_limit:{ type: Number, required: false }

})


const impactosQuantitativosSchema = new mongoose.Schema({

    descricao: { type: String, required: false },
    quantidade: { type: Number, min: 0, required: false },

})

const comentarios = new mongoose.Schema({
        data: { type: String, required: true },
        usuario: usuario,

    
})
const post_campanha = new mongoose.Schema({
    
            data: { type: String, required: true },
            titulo: { type: String, required: true },
            autor: { type: String, required: true },
            descricao: { type: String, required: true },
            like: { type: Number, required: false },
    
        
})
const prestacao_contas = new mongoose.Schema({
    
            data: { type: String, required: true },
            descricao: { type: String, required: true },
            recebido_por: { type: String, required: true },
            comprovante: { type: String, required: false },
            pago: { type: Boolean, required: true },
            valor: { type: Number, required: true },    
})

const campanhasSchema = new mongoose.Schema({

    titulo: { type: String, required: true },
    orcamento: { type: Number, required: true },
    valor_arrecadado: { type: Number, required: true },
    moeda: ['EUR', 'BRL', 'USD'],
    status: ['EM ANALISE', 'APROVADO', 'REPROVADO', 'ARRECADAMENTO'],
    imagem: { type: String, required: false },
    estado: { type: String, required: true },
    endereco: { type: String, required: true },
    cep: { type: String, required: true },
    telefone: { type: String, required: true },
    dataInicial:{ type: String, required: true},
    dataFinal:{ type: String, required: true },
    link_youtube: {type: String, required: false},
    descricao_projeto:{type: String, required: true},
    impactos_quantitativos:[impactosQuantitativosSchema],
    boolRecompensa: { type: Boolean, required: true },
    like: { type: Number, required: true },
    recompensas:[recompensa],
    equipe:[equipe],
    usuario: usuario,
    categoria: categoria,
    comentarios:[comentarios],
    prestacao_contas:[prestacao_contas],
    post_campanha:[post_campanha]
})

module.exports = restful.model('Campanhas', campanhasSchema)