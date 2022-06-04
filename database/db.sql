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
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Direccion` (
  `idDireccion` INT NOT NULL AUTO_INCREMENT,
  `calle` VARCHAR(20) NULL,
  `numExterior` INT NULL,
  `cp` INT NULL,
  `ciudad` VARCHAR(20) NULL,
  `estado` VARCHAR(45) NULL,
  `municipio` VARCHAR(45) NULL,
  PRIMARY KEY (`idDireccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`UsuarioEmpleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`UsuarioEmpleado` (
  `CURP` VARCHAR(18) NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `apellidoP` VARCHAR(20) NULL,
  `apellidoM` VARCHAR(20) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `CV` VARCHAR(45) NULL,
  `aniosExperiencia` INT NULL,
  `sexo` VARCHAR(45) NULL,
  `estadoCivil` VARCHAR(45) NULL,
  `RFC` VARCHAR(13) NULL,
  `visa_vigente` DATE NULL,
  `pasaporte_vigente` DATE NULL,
  PRIMARY KEY (`CURP`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Empresa` (
  `idEmpresa` INT NOT NULL AUTO_INCREMENT,
  `nombreEmpresa` VARCHAR(45) NULL,
  `idDireccionEmpresa` INT NOT NULL,
  `RazonSocial` VARCHAR(45) NULL,
  `UsuarioEmpresacol` VARCHAR(45) NULL,
  `CFDI` VARCHAR(45) NULL,
  `Descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`idEmpresa`),
  INDEX `fk_Empresa_Direccion1_idx` (`idDireccionEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_Empresa_Direccion1`
    FOREIGN KEY (`idDireccionEmpresa`)
    REFERENCES `mydb`.`Direccion` (`idDireccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`UsuarioEmpresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`UsuarioEmpresa` (
  `idUsuarioEmpresa` VARCHAR(18) NOT NULL,
  `Empresa_idEmpresa` INT NOT NULL,
  `nombre` VARCHAR(20) NULL,
  `apellidoP` VARCHAR(20) NULL,
  `apellidoM` VARCHAR(20) NULL,
  `email` VARCHAR(40) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuarioEmpresa`, `Empresa_idEmpresa`),
  INDEX `fk_UsuarioEmpresa_Empresa2_idx` (`Empresa_idEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_UsuarioEmpresa_Empresa2`
    FOREIGN KEY (`Empresa_idEmpresa`)
    REFERENCES `mydb`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Puesto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Puesto` (
  `idPuesto` INT NOT NULL AUTO_INCREMENT,
  `idUsuarioEmpresaCreador` VARCHAR(18) NOT NULL,
  `idEmpresa` INT NOT NULL,
  `idDireccionPuesto` INT NOT NULL,
  `nombrePuesto` VARCHAR(45) NULL,
  `modalidadTrabajo` VARCHAR(45) NULL,
  `tipoHorario` VARCHAR(45) NULL,
  `jornadaDeTrabajo` INT NULL,
  `areaConocimiento` VARCHAR(45) NULL,
  PRIMARY KEY (`idPuesto`),
  INDEX `fk_Puesto_Direccion1_idx` (`idDireccionPuesto` ASC) VISIBLE,
  INDEX `fk_Puesto_UsuarioEmpresa1_idx` (`idUsuarioEmpresaCreador` ASC, `idEmpresa` ASC) VISIBLE,
  CONSTRAINT `fk_Puesto_Direccion1`
    FOREIGN KEY (`idDireccionPuesto`)
    REFERENCES `mydb`.`Direccion` (`idDireccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Puesto_UsuarioEmpresa1`
    FOREIGN KEY (`idUsuarioEmpresaCreador` , `idEmpresa`)
    REFERENCES `mydb`.`UsuarioEmpresa` (`idUsuarioEmpresa` , `Empresa_idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Idioma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Idioma` (
  `idIdioma` INT NOT NULL AUTO_INCREMENT,
  `idPuesto` INT NOT NULL,
  `idUsuarioEmp` VARCHAR(18) NOT NULL,
  `lengua` VARCHAR(30) NULL,
  PRIMARY KEY (`idIdioma`, `idPuesto`, `idUsuarioEmp`),
  INDEX `fk_Idioma_Puesto1_idx` (`idPuesto` ASC) VISIBLE,
  INDEX `fk_Idioma_UsuarioEmpleado1_idx` (`idUsuarioEmp` ASC) VISIBLE,
  CONSTRAINT `fk_Idioma_Puesto1`
    FOREIGN KEY (`idPuesto`)
    REFERENCES `mydb`.`Puesto` (`idPuesto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Idioma_UsuarioEmpleado1`
    FOREIGN KEY (`idUsuarioEmp`)
    REFERENCES `mydb`.`UsuarioEmpleado` (`idUsuarioEmp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Aplicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Aplicacion` (
  `idUsuarioAplicante` VARCHAR(18) NOT NULL,
  `idPuestoAplicado` INT NOT NULL,
  `estatusAplicacion` TINYINT NULL,
  `fechaSolicitud` DATE NULL,
  PRIMARY KEY (`idUsuarioAplicante`, `idPuestoAplicado`),
  INDEX `fk_UsuarioEmpleado_has_Puesto_Puesto1_idx` (`idPuestoAplicado` ASC) VISIBLE,
  INDEX `fk_UsuarioEmpleado_has_Puesto_UsuarioEmpleado1_idx` (`idUsuarioAplicante` ASC) VISIBLE,
  CONSTRAINT `fk_UsuarioEmpleado_has_Puesto_UsuarioEmpleado1`
    FOREIGN KEY (`idUsuarioAplicante`)
    REFERENCES `mydb`.`UsuarioEmpleado` (`idUsuarioEmp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UsuarioEmpleado_has_Puesto_Puesto1`
    FOREIGN KEY (`idPuestoAplicado`)
    REFERENCES `mydb`.`Puesto` (`idPuesto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`InfoAcademica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`InfoAcademica` (
  `idExperiencia` INT NOT NULL AUTO_INCREMENT,
  `idUsuarioEmp` VARCHAR(18) NOT NULL,
  `tituloProfesion` VARCHAR(45) NULL,
  `areaEspecialidad` VARCHAR(45) NULL,
  `UniEgreso` VARCHAR(45) NULL,
  PRIMARY KEY (`idExperiencia`, `idUsuarioEmp`),
  INDEX `fk_InfoAcademica_UsuarioEmpleado1_idx` (`idUsuarioEmp` ASC) VISIBLE,
  CONSTRAINT `fk_InfoAcademica_UsuarioEmpleado1`
    FOREIGN KEY (`idUsuarioEmp`)
    REFERENCES `mydb`.`UsuarioEmpleado` (`idUsuarioEmp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`LenguajeProgramacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`LenguajeProgramacion` (
  `idLenguajeProgramacion` INT NOT NULL AUTO_INCREMENT,
  `idUsuarioEmp` VARCHAR(18) NOT NULL,
  `nombreLenguaje` VARCHAR(40) NULL,
  `aniosDePractica` INT NULL,
  PRIMARY KEY (`idLenguajeProgramacion`, `idUsuarioEmp`),
  INDEX `fk_LenguajeProgramacion_UsuarioEmpleado1_idx` (`idUsuarioEmp` ASC) VISIBLE,
  CONSTRAINT `fk_LenguajeProgramacion_UsuarioEmpleado1`
    FOREIGN KEY (`idUsuarioEmp`)
    REFERENCES `mydb`.`UsuarioEmpleado` (`idUsuarioEmp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
