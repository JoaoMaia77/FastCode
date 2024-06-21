
    // Fast Code v1.0 - Routes - 10/04/2021 17:49:16
    const express      = require('express')
    const router       = express.Router()
    const validaToken  = require('../auth/verifyToken')

    const tweetsGET        = require('../controllers/tweets/tweetsGET')
    const tweetsGETpage    = require('../controllers/tweets/tweetsGETpage')
    const tweetsGETseek    = require('../controllers/tweets/tweetsGETseek')
    const tweetsGETtypes   = require('../controllers/tweets/tweetsGETtypes')
    const tweetsPOST       = require('../controllers/tweets/tweetsPOST')
    const tweetsPUT        = require('../controllers/tweets/tweetsPUT')
    const tweetsDELETE     = require('../controllers/tweets/tweetsDELETE')
    
    router.get('/'          , validaToken, tweetsGET )
    router.get('/page'      , validaToken, tweetsGETpage )
    router.get('/types'     , validaToken, tweetsGETtypes )
    router.get('/:tagId'    , validaToken, tweetsGETseek )
    router.post('/'         , validaToken, tweetsPOST )
    router.put('/:tagId'    , validaToken, tweetsPUT )
    router.patch('/:tagId'  , validaToken, tweetsPUT )
    router.delete('/:tagId' , validaToken, tweetsDELETE )
    
    module.exports = router
    