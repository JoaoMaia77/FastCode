const bancos2 = require('../../src/models/bancos2');

bancos2.Debug(false);

( async () => {

    let LastID = await bancos2.LastID()

    console.log('Last ID',LastID)

    bancos2.Seek(LastID).then(ret=>{
        console.log('Response :',ret.command,ret.rowCount)
        console.log('Dados :',ret.rows)
        process.exit(0)
    })


})()

