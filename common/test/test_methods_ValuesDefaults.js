// Elementos para auxiliar/facilitar a manipulação de dados

const bancos2 = require('../../src/models/bancos2')

let newBanco1 = bancos2.Defaults

bancos2.ColumnsComments.then((newBanco2)=>{
    console.log('Values Columns  :',newBanco2)
})

bancos2.TableComment.then((newBanco3) =>{
    console.log('Values Table    :',newBanco3)
} )

console.log('Values Defaults :',newBanco1)
    


setTimeout( ()=> process.exit(0),5000)

return 0