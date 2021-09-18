/*IMPORTAÇÕES DE PATOCES*/
const express = require('express');

/*INSTANCIAS DE PATOCES*/
//express;
const app = express();

//CONFIGURAÇÃO DO EXPRESS P/ DADOS FORMATO JSON
app.use(express.json());

/*ROTAS*/
app.use(require('./src/rotas/routes'));


/*INSTANCIA DO SERVIDOR (express)*/
app.listen(3000, ()=>{
                        console.log('SERVIDOR RODANDO NA URL: http://localhost:3000')
});