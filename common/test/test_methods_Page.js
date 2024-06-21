// Metódo para retorno de dados paginados

const bancos = require('../../src/models/bancos');

bancos.Debug(false);

( async () => {

    //let condition  = "co_banco = '800' "

    bancos.Page('',2,10).then(ret=>{
        console.log('Response :',ret)
        process.exit(0)
    })

})()

