const moment = require('moment')

moment.locale('pt-br')

const routerAPI = async (unit) => { 
  
    const UNIT       = `${unit}`.toLowerCase()

    let txt
    let now = moment().format('DD/MM/YYYY HH:mm:ss')

    txt = `
    // Fast Code v1.0 - Routes - ${now}
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const ${UNIT}GET        = require('../controllers/${UNIT}/${UNIT}GET')
    const ${UNIT}GETpage    = require('../controllers/${UNIT}/${UNIT}GETpage')
    const ${UNIT}GETseek    = require('../controllers/${UNIT}/${UNIT}GETseek')
    const ${UNIT}GETtypes   = require('../controllers/${UNIT}/${UNIT}GETtypes')
    const ${UNIT}POST       = require('../controllers/${UNIT}/${UNIT}POST')
    const ${UNIT}PUT        = require('../controllers/${UNIT}/${UNIT}PUT')
    const ${UNIT}DELETE     = require('../controllers/${UNIT}/${UNIT}DELETE')
    
    router.get('/'          , validaToken, ${UNIT}GET )
    router.get('/page'      , validaToken, ${UNIT}GETpage )
    router.get('/types'     , validaToken, ${UNIT}GETtypes )
    router.get('/:tagId'    , validaToken, ${UNIT}GETseek )
    router.post('/'         , validaToken, ${UNIT}POST )
    router.put('/:tagId'    , validaToken, ${UNIT}PUT )
    router.patch('/:tagId'  , validaToken, ${UNIT}PUT )
    router.delete('/:tagId' , validaToken, ${UNIT}DELETE )
    
    module.exports = router
    `
    
return txt

}

module.exports = routerAPI
