const _ = require('lodash')
const destaqueTop = require('./destaqueTop')

destaqueTop.methods(['get', 'post', 'put', 'delete'])
destaqueTop.updateOptions({new: true, runValidators: true})

destaqueTop.after('post', sendErrorsOrNext).after('put', sendErrorsOrNext)

function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle

    if(bundle.errors) {
        var errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        next()
    }
}

function parseErrors(nodeRestfulErrors) {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}

module.exports = destaqueTop