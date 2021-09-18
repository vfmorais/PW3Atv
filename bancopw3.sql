CREATE DATABASE cliente;
use cliente;

CREATE TABLE tbl_cliente (
    codigo_cliente INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(500) NOT NULL,
    sobrenome VARCHAR(500) NOT NULL,
    data_nascimento TIMESTAMP(6) NOT NULL,
    rg VARCHAR(9) NOT NULL,
    cpf VARCHAR(11) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(10) NOT NULL,
    celular VARCHAR(11) NOT NULL
);

SELECT * FROM cliente.tbl_cliente;
