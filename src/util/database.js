// IMPORTA O MODULO DE MANIPULAÇÃO DO SGBDR MYSQL
const mysql = require('mysql');

//CONFIGURA UM OBJETO DE CONEXÃO COM O SGBDR MYSQL
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cliente'
});

//CONEXÃO
mysqlConnection.connect((error)=>{

    if (error) {

        console.log('ERRO NO BANCO DE DADOS: ${error}');

    } else{

        console.log('CONEXÃO EFETUADA COM SUCESSO!');
    }

});

module.exports = mysqlConnection;

