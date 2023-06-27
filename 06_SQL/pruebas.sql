-- create database es lo mismo que -- create scheme
-- drop database "nombre" elimina la database
-- es interesante poner un drop database IF EXISTS "nombre" para eliminar si existe la dataase vieja.
-- y lo mismo un crear database if not exists;
DROP DATABASE IF EXISTS DB_PRIMERA;
CREATE DATABASE IF NOT EXISTS DB_PRIMERA;

USE DB_PRIMERA;

CREATE TABLE IF NOT EXISTS personajes(
id_personaje INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(45),
apellido VARCHAR(45),
dni VARCHAR(10) NOT NULL,
fecha_nacimiento DATE,
residencia VARCHAR(45) DEFAULT "ESPAÑA"
);

SELECT * FROM DB_PRIMERA.personajes; -- select TODO from "lo que sea"

SHOW COLUMNS FROM personajes;

-- insert sirve para meter chicha a la tabla

INSERT INTO personajes VALUES (NULL, "Alberto","CHICOTE","12345678A","2000-1-2", DEFAULT);
INSERT INTO personajes(nombre,dni,fecha_nacimiento) 
VALUES ("Elvis","87654321B","1532-1-2");-- tambien podemos cambiarlo asi
-- los inserts se pueden stackear ("Elvis","87654321B","1532-1-2"),("Elvis","87654321B","1532-1-2");

SELECT * FROM DB_PRIMERA.personajes;

SHOW VARIABLES LIKE "max_allowed_packet"; -- permite ver el maximo tamaño de paquetes
-- un set @@global.max_allowed_packet = "num" permitiria aumentar ese valor