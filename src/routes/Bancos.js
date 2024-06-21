
    // Fast Code v1.0 - Routes - 10/04/2021 18:35:01
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const bancosGET        = require('../controllers/bancos/bancosGET')
    const bancosGETpage    = require('../controllers/bancos/bancosGETpage')
    const bancosGETseek    = require('../controllers/bancos/bancosGETseek')
    const bancosGETtypes   = require('../controllers/bancos/bancosGETtypes')
    const bancosPOST       = require('../controllers/bancos/bancosPOST')
    const bancosPUT        = require('../controllers/bancos/bancosPUT')
    const bancosDELETE     = require('../controllers/bancos/bancosDELETE')
    
    router.get('/'          , validaToken, bancosGET )
    router.get('/page'      , validaToken, bancosGETpage )
    router.get('/types'     , validaToken, bancosGETtypes )
    router.get('/:tagId'    , validaToken, bancosGETseek )
    router.post('/'         , validaToken, bancosPOST )
    router.put('/:tagId'    , validaToken, bancosPUT )
    router.patch('/:tagId'  , validaToken, bancosPUT )
    router.delete('/:tagId' , validaToken, bancosDELETE )
    
    module.exports = router
    