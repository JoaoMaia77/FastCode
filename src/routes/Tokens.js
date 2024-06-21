
    // Fast Code v1.0 - Routes - 10/04/2021 17:50:20
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const tokensGET        = require('../controllers/tokens/tokensGET')
    const tokensGETpage    = require('../controllers/tokens/tokensGETpage')
    const tokensGETseek    = require('../controllers/tokens/tokensGETseek')
    const tokensGETtypes   = require('../controllers/tokens/tokensGETtypes')
    const tokensPOST       = require('../controllers/tokens/tokensPOST')
    const tokensPUT        = require('../controllers/tokens/tokensPUT')
    const tokensDELETE     = require('../controllers/tokens/tokensDELETE')
    
    router.get('/'          , validaToken, tokensGET )
    router.get('/page'      , validaToken, tokensGETpage )
    router.get('/types'     , validaToken, tokensGETtypes )
    router.get('/:tagId'    , validaToken, tokensGETseek )
    router.post('/'         , validaToken, tokensPOST )
    router.put('/:tagId'    , validaToken, tokensPUT )
    router.patch('/:tagId'  , validaToken, tokensPUT )
    router.delete('/:tagId' , validaToken, tokensDELETE )
    
    module.exports = router
    