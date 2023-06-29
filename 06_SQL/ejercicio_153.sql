DROP DATABASE IF EXISTS DB_153;
CREATE DATABASE IF NOT EXISTS DB_153;
USE DB_153;

-- creacion de estudiantes e insercion de parametros.
CREATE TABLE IF NOT EXISTS estudiante(
estudiante_id INTEGER UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(45),
edad SMALLINT,
sexo VARCHAR(15)
);
INSERT INTO estudiante(estudiante_id,nombre,edad,sexo)
VALUES
(null,"Pedro",30,"M"),
(null,"Marta",32,"F"),
(null,"Alberto",20,"M"),
(null,"Sam",28,"F"),
(null,"Jose",31,"F"),
(null,"Quim",26,"M"),
(null,"Jesus",33,"M"),
(null,"Andrea",18,"F"),
(null,"Maria",55,"M"),
(null,"Sandra",27,"F"),
(null,"Fina",65,"F");

-- creacion de t_asignaturas e insercion
CREATE TABLE IF NOT EXISTS asignatura(
asignatura_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre_asignatura VARCHAR(45),
p_id SMALLINT UNSIGNED
);
INSERT INTO asignatura(asignatura_id,nombre_asignatura,p_id)
VALUES
(null,"biologia",4),
(null,"musica",1),
(null,"ingles",2),
(null,"educacion fisica",3),
(null,"castellano",1),
(null,"matematicas",2),
(null,"Catalan",4);

-- creacion de tabla intermedia estudiante-asignatura
CREATE TABLE IF NOT EXISTS notas(
est_id SMALLINT UNSIGNED,
asig_id SMALLINT UNSIGNED,
nota DECIMAL
);
INSERT INTO notas(est_id,asig_id,nota)
VALUES
(1,2,4),(1,7,8),
(2,3,6),(2,1,9),
(3,5,5),(3,3,6),
(4,5,7),(4,3,3),
(5,6,5),(5,3,7),
(6,2,8),(6,4,10),
(7,4,2),(7,7,7),
(8,1,9),(8,2,2),
(9,3,5),(9,4,4),
(10,5,7),(10,6,4),
(11,7,8),(11,2,3);

-- creacion de tabla profesor E insercion de datos.
CREATE TABLE IF NOT EXISTS profesor(
profe_id SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
p_nombre VARCHAR(45)
);
INSERT INTO profesor(profe_id,p_nombre) 
VALUES
(null,"Juanjo"),
(null,"Mariona"),
(null,"Pili"),
(null,"David");

-- mostrar los alumnos a los que cada profesor da clases
SELECT p_nombre, nombre,nombre_asignatura FROM profesor
INNER JOIN asignatura 
	ON profesor.profe_id = asignatura.p_id    
INNER JOIN notas
	ON asignatura.asignatura_id = notas.asig_id
INNER JOIN estudiante
	ON estudiante.estudiante_id = notas.est_id
    order by p_nombre asc;
    
-- seleccionar cuantas asignaturas da cada profesor.
SELECT distinct p_nombre, count(nombre_asignatura) as asignaturas FROM profesor
INNER JOIN asignatura 
	ON profesor.profe_id = asignatura.p_id  
GROUP BY p_nombre;

-- total de cursos APROBADos POR ALUMNO se que no es lo que me pide pero es un paso mas adelante.
SELECT distinct nombre, count(nombre_asignatura) as "asignaturas aprobadas" FROM estudiante
INNER JOIN notas
	ON estudiante.estudiante_id = notas.est_id    
INNER JOIN asignatura
	ON asignatura.asignatura_id = notas.asig_id
WHERE nota>=5
group by nombre;




