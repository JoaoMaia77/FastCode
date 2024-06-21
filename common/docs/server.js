// Fast Code v1.0 - Server API - 09/04/2021 00:00:56
    const express      = require('express')  
    const morgan       = require('morgan')
    const path         = require('path')
    
    const app = express()  
    
    const api = require('../routes/api')  
    
    app.use('/public',express.static('public'))
    app.use(express.static('works'))

    app.use(morgan('dev'))
    
    app.use(function (req, res, next) {  
        res.header("Access-Control-Allow-Origin", "*")  
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")  
        res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')  // PUT, POST, GET, DELETE, OPTIONS
        next()  
    }) 
    
    app.use(express.urlencoded({ extended: true }))
    app.use(express.json())
    
    app.use('/api', api )  

    app.get('/',(req,res)=>{

        res.sendFile( path.join(__dirname + '../../../works/inputs.html') )

    })
    
    const port = process.env.PORT || '5000'
    const modo = process.env.NODE_ENV || 'Test'
    
    function server () {
        app.listen(port, function () {
            console.log('serverAPI - rodando na porta ',port ,' : Modo ',modo)
            console.log('http://localhost:'+port)
        })
     }
     
     module.exports = server
    