CREATE DATABASE IF NOT EXISTS bdjogos;

USE bdjogos;

CREATE TABLE IF NOT EXISTS jogos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    genero VARCHAR(50),
    plataforma VARCHAR(50),
    ano INT,
    avaliacao FLOAT
);