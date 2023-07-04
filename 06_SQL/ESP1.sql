-- APARTADO 1

-- a
DROP DATABASE IF EXISTS db_esp1;

-- b
CREATE DATABASE IF NOT EXISTS db_esp1;

-- c
USE db_esp1;

-- d
CREATE TABLE IF NOT EXISTS movies(
movies_id INTEGER UNSIGNED PRIMARY KEY auto_increment,
title VARCHAR(100) NOT NULL,
year INTEGER NOT NULL,
image_url VARCHAR(255) NOT NULL,
certificate VARCHAR(45),
runtime INTEGER UNSIGNED,
imdb_rating FLOAT,
description TEXT,
metascore INTEGER UNSIGNED,
votes INTEGER UNSIGNED,
gross INTEGER UNSIGNED
);

CREATE TABLE IF NOT EXISTS directors(
directors_id INTEGER UNSIGNED PRIMARY KEY auto_increment,
name VARCHAR(45) NOT NULL UNIQUE,
about TEXT
);

CREATE TABLE IF NOT EXISTS movies_directors(
forMD_movies_id INTEGER UNSIGNED,
forMD_directors_id INTEGER UNSIGNED
);

CREATE TABLE IF NOT EXISTS stars(
stars_id INTEGER UNSIGNED PRIMARY KEY auto_increment,
name VARCHAR(45) NOT NULL UNIQUE,
about TEXT
);

CREATE TABLE IF NOT EXISTS movies_stars(
forMS_movies_id INTEGER UNSIGNED ,
forMS_stars_id INTEGER UNSIGNED 
);

CREATE TABLE IF NOT EXISTS genres(
genres_id INTEGER UNSIGNED PRIMARY KEY auto_increment,
name VARCHAR(45) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS movies_genres(
forMG_movies_id INTEGER UNSIGNED ,
forMG_genres_id INTEGER UNSIGNED 
);

INSERT INTO movies(movies_id,title,year,image_url,certificate,runtime,imdb_rating,description,metascore,votes,gross) values
(null,"titulo1",1900,"url1","certificado1",93,9,"descripcion1",9,923,2),
(null,"titulo2",1910,"url2","certificado2",103,9,"descripcion2",8.7,1264,3),
(null,"titulo3",1920,"url3","certificado3",83,9,"descripcion3",7.3,5156,4),
(null,"titulo4",1930,"url4","certificado1",47,9,"descripcion4",6.2,2541,5),
(null,"titulo5",1940,"url5","certificado2",247,9,"descripcion5",10,54102,1),
(null,"titulo6",1950,"url6","certificado3",99,9,"descripcion6",8.4,1561,3),
(null,"titulo7",1960,"url7","certificado1",76,9,"descripcion7",4.8,1,7),
(null,"titulo8",1970,"url8","certificado2",86,9,"descripcion8",7.6,45645,4),
(null,"titulo9",1980,"url9","certificado3",89,9,"descripcion9",7.8,432245,4),
(null,"titulo10",1990,"url10","certificado4",95,9,"descripcion10",5.6,78465,6);

INSERT INTO directors(directors_id,name) VALUES
(null,"director1"),
(null,"director2"),
(null,"director3"),
(null,"director4"),
(null,"director5"),
(null,"director6"),
(null,"director7"),
(null,"director8"),
(null,"director9"),
(null,"director10");

INSERT INTO movies_directors(forMD_movies_id,forMD_directors_id) VALUES
(1,1),
(2,2),
(3,3),(3,5),
(4,4),
(5,5),
(6,6),
(7,1),(7,3),
(8,8),
(9,9),
(10,2),(10,10);

INSERT INTO stars(stars_id, name) VALUES
(null,"estrella1"),
(null,"estrella2"),
(null,"estrella3"),
(null,"estrella4"),
(null,"estrella5"),
(null,"estrella6"),
(null,"estrella7"),
(null,"estrella8"),
(null,"estrella9"),
(null,"estrella10"),
(null,"estrella11"),
(null,"estrella12"),
(null,"estrella13"),
(null,"estrella14"),
(null,"estrella15"),
(null,"estrella16"),
(null,"estrella17"),
(null,"estrella18"),
(null,"estrella19"),
(null,"estrella20");

INSERT INTO movies_stars(forMS_movies_id,forMS_stars_id) VALUES
(1,1),(1,3),(1,7),(1,9),
(2,2),
(3,4),(3,20),
(4,1),(4,9),(4,10),(4,7),
(5,8),(5,4),(5,3),
(6,8),(6,5),(6,9),
(7,19),(7,16),(7,17),(7,7),(7,18),
(8,6),(8,12),(8,10),
(9,5),(9,13),(9,11),(9,14),(9,15),
(10,6),(10,2),(10,11);


INSERT INTO genres(genres_id,name) VALUES
(null,"genre1"),
(null,"genre2"),
(null,"genre3"),
(null,"genre4"),
(null,"genre5"),
(null,"genre6"),
(null,"genre7"),
(null,"genre8"),
(null,"genre9"),
(null,"genre10");

INSERT INTO movies_genres(forMG_movies_id,forMG_genres_id) VALUES
(1,1),(1,5),
(2,4),(2,3),
(3,3),(3,8),
(4,2),(4,1),
(5,7),(5,6),
(6,5),
(7,8),(7,10),
(8,9),
(9,6),(9,5),
(10,10);



DROP DATABASE IF EXISTS db_esp1;