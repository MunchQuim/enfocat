DROP DATABASE IF EXISTS DB_150;
CREATE DATABASE IF NOT EXISTS DB_150;
USE DB_150;

-- insertar tabla direccion.
DROP TABLE IF EXISTS direccion;
CREATE TABLE IF NOT EXISTS direccion(
Direccion_id smallint UNSIGNED PRIMARY KEY AUTO_INCREMENT,
Direccion VARCHAR(45),
Distrito VARCHAR(45),
Codigo_Postal VARCHAR(45),
Telefono VARCHAR(45),
Localizacion VARCHAR(45),
Last_update TIMESTAMP
);

INSERT INTO direccion(Direccion_id,Direccion,Distrito,Codigo_Postal,Telefono,Localizacion,Last_Update) values
(null, 'Apt 4', 'District 1', '12345', '555-1234', 'Location 1', CURRENT_TIMESTAMP),
(null, NULL, 'District 2', '67890', '555-5678', 'Location 2', CURRENT_TIMESTAMP),
(null, 'Suite 10', 'District 3', '24680', '555-9101', 'Location 3', CURRENT_TIMESTAMP),
(null, NULL, 'District 4', '13579', '555-1112', 'Location 4', CURRENT_TIMESTAMP),
(null, 'Apt 7', 'District 5', '97531', '555-1314', 'Location 5', CURRENT_TIMESTAMP),
(null, 'Unit 3', 'District 6', '46802', '555-1516', 'Location 6', CURRENT_TIMESTAMP),
(null, NULL, 'District 7', '80246', '555-1718', 'Location 7', CURRENT_TIMESTAMP),
(null, 'Suite 5', 'District 8', '62480', '555-1920', 'Location 8', CURRENT_TIMESTAMP),
(null, 'Apt 2', 'District 9', '20864', '555-2122', 'Location 9', CURRENT_TIMESTAMP),
(null, NULL, 'District 10', '74026', '555-2324', 'Location 10', CURRENT_TIMESTAMP);

select * from direccion;

-- insertar tabla ciudad
DROP TABLE IF EXISTS ciudad;
CREATE TABLE IF NOT EXISTS ciudad(
Ciudad_id smallint UNSIGNED PRIMARY KEY AUTO_INCREMENT,
Ciudad VARCHAR(45),
Pais VARCHAR(45),
Last_update TIMESTAMP
);

INSERT INTO ciudad(Ciudad_id,Ciudad,Pais,Last_update) 
VALUES
(NULL,'New York',"USA", CURRENT_TIMESTAMP),
(NULL,'London',"ENG", CURRENT_TIMESTAMP),
(NULL,'Paris',"FRA", CURRENT_TIMESTAMP),
(NULL,'Tokyo',"JAP", CURRENT_TIMESTAMP),
(NULL,'Sydney',"AUS", CURRENT_TIMESTAMP),
(NULL,'Barcelona',"ESP", CURRENT_TIMESTAMP),
(NULL,'Rome',"ITA", CURRENT_TIMESTAMP),
(NULL,'Toronto',"CAN", CURRENT_TIMESTAMP),
(NULL,'Moscow',"RUS", CURRENT_TIMESTAMP),
(NULL,'Berlin',"GER", CURRENT_TIMESTAMP);

select * from ciudad;
-- insertar tabla pais
DROP TABLE IF EXISTS pais;
CREATE TABLE IF NOT EXISTS pais(
Pais_id smallint UNSIGNED PRIMARY KEY AUTO_INCREMENT,
Pais VARCHAR(45),
Last_update TIMESTAMP
);
INSERT INTO pais(Pais_id,Pais,Last_update) 
VALUES
(NULL,'United States', CURRENT_TIMESTAMP),
(NULL,'United Kingdom', CURRENT_TIMESTAMP),
(NULL,'France', CURRENT_TIMESTAMP),
(NULL,'Japan', CURRENT_TIMESTAMP),
(NULL,'Australia', CURRENT_TIMESTAMP),
(NULL,'Spain', CURRENT_TIMESTAMP),
(NULL,'Italy', CURRENT_TIMESTAMP),
(NULL,'Canada', CURRENT_TIMESTAMP),
(NULL,'Russia', CURRENT_TIMESTAMP),
(NULL,'Germany', CURRENT_TIMESTAMP);

SELECT * FROM pais;

-- BORRAR PARA NO OCUPAR ESPACIO EN BANO
DROP DATABASE DB_150;
