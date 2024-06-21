const fs = require('fs');
const path = require('path');

function makeFolders(dir) {
    let pastas = dir.split('/').slice(1)
    criaPasta(pastas)
    function criaPasta(pastas,dir) {
        if(!dir){ dir = path.join(__dirname, '../../') }
        let verifica  = path.join(dir , pastas[0] )
        let lista     = pastas.slice(1) 
        if(!fs.existsSync(verifica)){ fs.mkdirSync(verifica) }
        if(lista.length>0) { criaPasta(lista,verifica) }
    } 
}

module.exports = makeFolders