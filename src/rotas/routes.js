/*IMPORTAÇÕES DE PATOCES*/
const express = require('express');

const mysqlConnection = require('../util/database');

/* CONFIGURAÇÃO DO SISTEMA DE ROTAS DA API: */
const router = express.Router();

/*ROTA DE LISTAGEM DE DADOS DE CLIENTE: (GET)*/
router.get('/list', (request, response)=>{

    mysqlConnection.query('SELECT * FROM tbl_cliente',
                         (error, rows, fields)=>{
                            if (error) {

                                response.json({status: 'ERRO AO SELECIONAR DADOS'});

                            } else {

                                response.json(rows);

                         }   
                        });

});

/*ROTA DE LISTAGEM DE DADOS DE CLIENTE POR CODIGO_CLIENTE "ID": (GET)*/
router.get('/listID/:codigo_cliente', (request, response)=>{

    const {codigo_cliente} = request.params;

    mysqlConnection.query('SELECT * FROM tbl_cliente WHERE codigo_cliente = ?',
                            [codigo_cliente],
                            (error, rows, fields)=>{
                                if(error){

                                    response.json({status: 'ERRO AO SELECIONAR OS DADOS'});

                                } else {

                                    response.json(rows);
                                }
                            })

}); 

/*ROTA DE INSERÇÃO DE DADOS DE CLIENTE: (POST)*/
router.post('/insert', (request, response)=>{

    const {nome, sobrenome, data_nascimento, rg, cpf, email, telefone, celular} = request.body;
    
//INSERÇÃO DE DADOS
mysqlConnection.query('INSERT INTO tbl_cliente (nome, sobrenome, data_nascimento, rg, cpf, email, telefone, celular) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                        [nome, sobrenome, data_nascimento, rg, cpf, email, telefone, celular],
                        (error, rows, fields)=>{
                            if (error) {
                            
                                response.json({status : 'ERRO AO INSERIR DADOS'})

                            } else {

                                response.json({status : 'DADOS INSERIDOS COM SUCESSO'})

                            }
                        
                        });

});


/*ROTA DE ALTERÇÃO DE DADOS DE CLIENTE: (PUT)*/
router.put('/alter/:codigo_cliente', (request, response)=>{
    
    const {nome, sobrenome, data_nascimento, rg, cpf, email, telefone, celular} = request.body;
    
    const {codigo_cliente} =request.params

    mysqlConnection.query('UPDATE tbl_cliente SET nome = ?, sobrenome = ?, data_nascimento = ?, rg = ?, cpf = ?, email = ?, telefone = ?, celular = ? WHERE codigo_cliente = ?',
                            [nome, sobrenome, data_nascimento, rg, cpf, email, telefone, celular, codigo_cliente],
                            (error, rows, fields)=>{
                                if (error) {
                                
                                    response.json({status : 'ERRO AO ALTERAR DADOS'})
                        
                                } else {
                        
                                    response.json({status : 'DADOS ALTERADOS COM SUCESSO'})
                        
                                }
                            
                            });
                        
                        
});

/*ROTA DE EXCLUSÃO DE DADOS DE CLIENTE: (DELETE)*/
router.delete('/delete/:codigo_cliente', (request, response)=>{

    const {codigo_cliente} = request.params;

    mysqlConnection.query('DELETE FROM tbl_cliente WHERE codigo_cliente = ?',
                            [codigo_cliente],
                            (error, rows, fields)=>{
                                if (error) {
                                
                                    response.json({status : 'ERRO AO EXCLUIR DADOS'})
                        
                                } else {
                        
                                    response.json({status : 'DADOS EXCLUIDOS COM SUCESSO'})
                        
                                }
                            
                            });

    
});

module.exports = router;

