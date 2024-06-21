const colors            = require('colors')
const moment            = require('moment')
const displayDados      = require('../../common/helpers/displayDados')
const modelEntities     = require('../templates/modelEntities')
const routerAPI         = require('../templates/routerAPI')
const configEntities    = require('../templates/configEntities')
const listAPI           = require('../templates/listAPI')
const entityApiGET      = require('../templates/entityApiGET')
const entityApiGETseek  = require('../templates/entityApiGETseek')
const entityApiGETpage  = require('../templates/entityApiGETpage')
const entityApiGETtypes = require('../templates/entityApiGETtypes')
const entityApiPOST     = require('../templates/entityApiPOST')
const entityApiPUT      = require('../templates/entityApiPUT')
const entityApiDELETE   = require('../templates/entityApiDELETE')
const serverAPI         = require('../templates/serverAPI')
const createNewFile     = require('../../common/helpers/createNewFile')

// node .\fastCode\codeGenerators\entityModel.js --table tweets --schema public --unit Tweets --save --no-show

const model_DIR       = './src/models' 
const router_DIR      = './src/routes' 
const controllersDIR  = './src/controllers'
const serverApiDIR    = './src/api'
const test_DIR        = './common/test' 
const backup_DIR      = './common/backup' 

global._dsp_message         = ''
global._dsp_date_connection = ''

let ROTINE     = process.argv[1]
let NODE       = process.argv[0]
let TABLE      = null 
let SCHEMA     = null
let UNIT       = null
let SAVE       = false
let SHOW       = true

let geraListaAPI

process.stdout.write('\x1B[2J\x1B[0f')
const titulo = '[Fast Code - By: Jurandir Ferreira]'.yellow.bgBlue.bold
console.log(titulo)

const entityModel = (params) => {
    let { ROTINE, NODE, TABLE, SCHEMA, UNIT, SAVE, SHOW } = params

    if(!TABLE) {
        console.log('Fast Code - Parâmetro "--table" obrigatório !!!') 
        process.exit(0)    
    }

    SCHEMA = SCHEMA ? SCHEMA : 'public'
    UNIT   = UNIT   ? UNIT : TABLE.charAt(0).toUpperCase() + TABLE.slice(1)
    
    if(SHOW) { console.log('NODE:',NODE) }
    if(SHOW) { console.log('ROTINE:',ROTINE) }

    configEntities(TABLE,UNIT)
   
    modelEntities(TABLE,SCHEMA,UNIT).then(txt=>{
        
        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(model_DIR,UNIT,txt) }
        
    })

    routerAPI(UNIT).then(txt=>{
        
        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(router_DIR,UNIT,txt) }
        
    })

    entityApiGET(UNIT).then((txt)=>{

        let unit = `${UNIT}`.toLowerCase()+'GET'
        let dir  = `${controllersDIR}/${UNIT}`

        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(dir,unit,txt) }

    })

    entityApiGETseek(UNIT).then((txt)=>{

        let unit = `${UNIT}`.toLowerCase()+'GETseek'
        let dir  = `${controllersDIR}/${UNIT}`

        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(dir,unit,txt) }

    })

    entityApiGETpage(UNIT).then((txt)=>{

        let unit = `${UNIT}`.toLowerCase()+'GETpage'
        let dir  = `${controllersDIR}/${UNIT}`

        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(dir,unit,txt) }

    })

    entityApiGETtypes(UNIT).then((txt)=>{

        let unit = `${UNIT}`.toLowerCase()+'GETtypes'
        let dir  = `${controllersDIR}/${UNIT}`

        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(dir,unit,txt) }

    })

    serverAPI().then((txt)=>{

        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(serverApiDIR,'server',txt) }

    })

    entityApiPOST(UNIT).then((txt)=>{

        let unit = `${UNIT}`.toLowerCase()+'POST'
        let dir  = `${controllersDIR}/${UNIT}`

        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(dir,unit,txt) }

    })

    entityApiPUT(UNIT).then((txt)=>{

        let unit = `${UNIT}`.toLowerCase()+'PUT'
        let dir  = `${controllersDIR}/${UNIT}`

        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(dir,unit,txt) }

    })

    entityApiDELETE(UNIT).then((txt)=>{

        let unit = `${UNIT}`.toLowerCase()+'DELETE'
        let dir  = `${controllersDIR}/${UNIT}`

        if(SHOW) { console.log(txt) }
        if(SAVE) { createNewFile(dir,unit,txt) }

    })

    geraListaAPI = () => {
        listAPI().then((txt)=>{

            if(SHOW) { console.log(txt) }
            if(SAVE) { createNewFile(router_DIR,'api',txt) }

        })
    }


}

process.argv.forEach(function (val, index, array) {
    if(val=='--table'  ) { TABLE  = array[index+1] } else 
    if(val=='--schema' ) { SCHEMA = array[index+1] } else 
    if(val=='--unit'   ) { UNIT   = array[index+1] } else
    if(val=='--save'   ) { SAVE   = true  } else 
    if(val=='--no-show') { SHOW   = false } 
    
})

let values = { ROTINE, NODE, TABLE, SCHEMA, UNIT, SAVE, SHOW }

entityModel(values)

let params = {}
let count  = 5
function intervalFunc() {
    params.count      = count
    params.message    = global._dsp_message
    params.time       = global._dsp_date_connection
    displayDados( params ) 
    count--
    
    if(count==3) { geraListaAPI() }

    if(count==0) {
        params.count      = count
        params.message    = 'Bye Bye !!!'
        params.time       = moment(new Date()).format()
        displayDados( params )
        process.exit(0)
    }
}
setInterval(intervalFunc, 1500);
