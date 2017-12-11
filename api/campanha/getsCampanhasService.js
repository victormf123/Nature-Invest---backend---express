/**
 * Created by matheus on 23/09/17.
 */
const _ = require('lodash')
const campanhas = require('./campanhas')

const getCampanhas = (req, res, next) => {
    campanhas.find((err, campanhas) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(campanhas)
        }
    })

}

const getCampanhasRetaFinal = (req, res, next) => {
    campanhas.$where('this.valor_arrecadado >= ( this.orcamento * 0.7 )').exec((err, campanhas) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(campanhas)
        }
    })
    

}

const getCampanhasCampanhasRecemLancados = (req, res, next) => {
    campanhas.$where('this.valor_arrecadado <= ( this.orcamento * 0.3 )').exec((err, campanhas) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(campanhas)
        }
    })
}

const getCampanhaById = (req, res, next) => {
    let _id = req.params.id
    campanhas.findById(_id, (err, campanha) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(campanha)
        }
    })

}


module.exports = { getCampanhas, getCampanhasRetaFinal, getCampanhasCampanhasRecemLancados, getCampanhaById }