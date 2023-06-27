DROP DATABASE IF EXISTS DB_PRIMERA;
CREATE DATABASE IF NOT EXISTS DB_PRIMERA;
USE DB_PRIMERA;
CREATE TABLE IF NOT EXISTS Album(
idAlbum INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
albumName VARCHAR(255),
dateReleased DATETIME
);
CREATE TABLE IF NOT EXISTS Genre(
idGenre INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
genre VARCHAR(255)
);
CREATE TABLE IF NOT EXISTS Artist(
idArtist INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
artistName VARCHAR(255)
);

INSERT INTO Album VALUES
(null,"Capadocia","2018-1-1"),
(null,"Lo que te conte mientras te hacias la dormida","2003-1-1"),
(null,"La terra es plana","2004-1-1"),
(null,"Estrella de mar","2002-1-1"),
(null,"Soplando versos","2006-1-1"),
(null,"Gato negro Dragon rojo","2008-1-1"),
(null,"The great war","2019-1-1"),
(null,"Gaia III Atlantia","2010-1-1"),
(null,"Gaia II","2006-1-1"),
(null,"Love and love","2011-1-1");

INSERT INTO Genre VALUES
(null,"rock"),
(null,"pop"),
(null,"metal"),
(null,"clasica"),
(null,"electronica"),
(null,"indie"),
(null,"grunge"),
(null,"anime"),
(null,"rap"),
(null,"reggeton");

INSERT INTO Artist VALUES
(null,"Full"),
(null,"Oreja de van gogh"),
(null,"Quimi Portet"),
(null,"Amaral"),
(null,"Celtas cortos"),
(null,"Sabaton"),
(null,"Mago de Oz"),
(null,"Taylor swift"),
(null,"Hannah Montana"),
(null,"Bad Bunny");

USE DB_PRIMERA;
SELECT * FROM Album;
SELECT * FROM Genre;
SELECT * FROM Artist;