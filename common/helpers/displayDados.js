const displayDados = ( params ) => {
    process.stdout.write(`\r${params.time} - ${params.message} / ${params.count} , Use (Ctr-C) p/ Finalizar..`.yellow)
}
module.exports = displayDados