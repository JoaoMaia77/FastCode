const bancos2 = require('../../src/models/bancos2')

let newBanco = bancos2.Defaults

newBanco.no_site   = 'http://www.google.com'
newBanco.no_bancos = 'Exemplo S/A'

bancos2.Debug(false)

bancos2.Insert(newBanco).then(ret=>{
    console.log('Response :',ret.command,ret.rowCount)
    console.log('ID :',ret.ID)
    process.exit(0)
})
