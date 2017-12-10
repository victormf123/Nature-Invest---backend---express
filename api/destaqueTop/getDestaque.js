/**
 * Created by matheus on 23/09/17.
 */
const _ = require('lodash')
const campanhaDestaque = require('./destaqueTop')



const getCampanhaDestaque = (req, res, next) => {
    campanhaDestaque.findOne((err, destaque) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(destaque)
        }
    })

}


module.exports =  { getCampanhaDestaque }
