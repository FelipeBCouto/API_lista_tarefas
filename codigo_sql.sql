CREATE DATABASE nome_do_BD; -- escolha o nome do BD

USE nome_do_BD;

CREATE TABLE tasks(
	id int auto_increment not null primary key,
    tarefa varchar(85) not null,
    descricao text
);