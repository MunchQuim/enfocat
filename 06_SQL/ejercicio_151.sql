
DROP DATABASE IF EXISTS DB_151;
CREATE DATABASE IF NOT EXISTS DB_151;
USE DB_151;

CREATE TABLE IF NOT EXISTS salesman(
idSalesman SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(45),
city VARCHAR(45),
comission DECIMAL
);
INSERT INTO salesman(idSalesman,nombre,city,comission)
VALUES
(null,"Pedro","Ciudad de Mexico",3),
(null,"Pablo","Malaga",1),
(null,"Aïna","Barcelona",4),
(null,"Cris","Madrid",5),
(null,"Carlos","Barcelona",70),
(null,"Benita","Murillo el Fruto",5),
(null,"Alejandro","Larraga",9),
(null,"Alex","Barcelona",4),
(null,"Sandra","Bilbao",13),
(null,"Dani","San Sebastián",21);
SELECT * FROM salesman;

CREATE TABLE IF NOT EXISTS customer(
idCustomer SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
custName VARCHAR(45),
city VARCHAR(45),
grade DECIMAL
);
INSERT INTO customer(idCustomer,custName,city,grade)
VALUES
(null, "Guillermo", "Bolivia_city",8),
(null, "Ingrid", "Bolivia_city",3),
(null, "David", "Malaga",1),
(null, "Mario", "Mataró",8),
(null, "Blas", "El vallés",2),
(null, "Adrian", "Ciudad de Mexico",5),
(null, "Apipipi", "Atlantida",4),
(null, "Aaron", "Argos",8),
(null, "Miquel", "Cervantes",9),
(null, "Julio", "Roma",96);
SELECT * FROM customer;

CREATE TABLE IF NOT EXISTS orders(
ord_Number SMALLINT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
purch_amt VARCHAR(45),
ord_Date DATE,
customerID SMALLINT,
salesmanID SMALLINT
);
INSERT INTO orders(ord_Number,purch_amt,ord_date,customerID,salesmanID)
VALUES
(null, 43985348,"1993-11-23",2,4),
(null, 7383439837,"2003-01-13",6,2),
(null, 45653254,"2023-02-3",7,5),
(null, 35673567,"2014-03-13",3,8),
(null, 7567537,"0003-04-23",6,5),
(null, 73685603,"2023-05-11",3,7),
(null, 94674567,"2023-06-17",8,4),
(null, 239837,"2023-07-13",5,7),
(null, 733243837,"2023-08-09",4,4),
(null, 658439837,"2023-09-13",6,3),
(null, 3837439837,"2023-10-03",6,1),
(null, 3988734337,"2023-11-04",4,5),
(null, 8384397337,"2023-12-07",1,7),
(null, 3839873743,"2023-2-28",4,6);
SELECT * FROM orders;
-- total de registros de orders
SELECT count(*) AS "total de registros" FROM orders;
-- ordenar salesman segun ventas desc
SELECT * FROM salesman
ORDER BY comission DESC;
-- LOS 5 primeros customers ordenados por id;
SELECT * FROM customer
ORDER BY idCustomer
LIMIT 5;
-- order con mayor purch_amt
SELECT max(purch_amt) FROM orders;
-- order con menor purch_amt
SELECT min(purch_amt) FROM orders;
-- borro todo para que no hayan 50000 tablas y databases.
DROP DATABASE DB_151;
