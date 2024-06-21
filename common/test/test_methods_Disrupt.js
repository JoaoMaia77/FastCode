// Elementos para auxiliar/facilitar a manipulação de dados

const bancos2 = require('../../src/models/bancos2')

let newBanco = bancos2.Defaults

newBanco.no_site   = 'http://www.google.com'
newBanco.no_bancos = 'Exemplo S/A'

bancos2.Debug(false)

let disrupt = bancos2.Disrupt(newBanco)
console.log('Disrupt :',disrupt)

process.exit(0)
