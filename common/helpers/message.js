const message = [
    {id:00, success: false, message: 'Dados não localizados na pesquisa !!!',code:404},    
    {id:01, success: true,  message: 'Sucesso. OK.',code:200},
    {id:02, success: false, message: 'Erro interno !!!', code:500},    
    {id:03, success: true,  message: 'Incluido com sucesso !!!', code:201},    
    {id:04, success: true,  message: 'Excluído com sucesso !!!', code:202},    
    {id:05, success: true,  message: 'Alterado com sucesso !!!', code:202},    
    {id:06, success: false, message: 'Acesso negado !!!',code:403},    
    {id:07, success: false, message: 'Token invalido !!!',code:403},    
    {id:08, success: false, message: 'Requisição invalida !!!',code:400},    
] 

const msg = (idx) => message[idx]

module.exports = msg;