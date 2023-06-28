-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
drop SCHEMA IF EXISTS `mydb`;
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Pais`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Pais` (
  `Pais_id` SMALLINT NOT NULL AUTO_INCREMENT,
  `Pais` VARCHAR(45) NOT NULL,
  `Last_Update` TIMESTAMP NULL,
  PRIMARY KEY (`Pais_id`),
  UNIQUE INDEX `id_UNIQUE` (`Pais_id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ciudad` (
  `Ciudad_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Ciudad` VARCHAR(45) NOT NULL,
  `Last_Update` TIMESTAMP NULL,
  `País` VARCHAR(45) NOT NULL,
  `Pais_Pais_id` SMALLINT NOT NULL,
  PRIMARY KEY (`Ciudad_id`),
  UNIQUE INDEX `Ciudad_id_UNIQUE` (`Ciudad_id` ASC) VISIBLE,
  INDEX `fk_Ciudad_Pais1_idx` (`Pais_Pais_id` ASC) VISIBLE,
  CONSTRAINT `fk_Ciudad_Pais1`
    FOREIGN KEY (`Pais_Pais_id`)
    REFERENCES `mydb`.`Pais` (`Pais_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Direccion` (
  `Direccion_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Direccion` VARCHAR(45) NULL,
  `Distrito` VARCHAR(45) NULL,
  `Codigo_Postal` VARCHAR(45) NULL,
  `Telefono` VARCHAR(45) NULL,
  `Localizacion` VARCHAR(45) NULL,
  `Last_Update` TIMESTAMP NULL,
  `Ciudad_Ciudad_id` SMALLINT UNSIGNED NOT NULL,
  PRIMARY KEY (`Direccion_id`),
  INDEX `fk_Direccion_Ciudad_idx` (`Ciudad_Ciudad_id` ASC) VISIBLE,
  CONSTRAINT `fk_Direccion_Ciudad`
    FOREIGN KEY (`Ciudad_Ciudad_id`)
    REFERENCES `mydb`.`Ciudad` (`Ciudad_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
