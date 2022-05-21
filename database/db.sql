CREATE DATABASE ijalti;
-- -----------------------------------------------------
-- Table `ijalti`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`Usuario` (
  `idUsuario` VARCHAR(13) NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`Direccion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`Direccion` (
  `idDireccion` INT NOT NULL,
  `calle` VARCHAR(20) NULL,
  `numExterior` INT NULL,
  `cp` INT NULL,
  `ciudad` VARCHAR(20) NULL,
  `estado` VARCHAR(45) NULL,
  `municipio` VARCHAR(45) NULL,
  PRIMARY KEY (`idDireccion`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`nivelExperiencia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`nivelExperiencia` (
  `idNivelExp` INT NOT NULL,
  `idHabilidades` VARCHAR(45) NOT NULL,
  `idTecnologia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idNivelExp`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`UsuarioEmpleado`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`UsuarioEmpleado` (
  `idUsuarioEmp` VARCHAR(13) NOT NULL,
  `uniEgreso` VARCHAR(45) NULL,
  `CV` VARCHAR(45) NULL,
  `aniosExperiencia` INT NULL,
  `idDireccionEmpleado` INT NOT NULL,
  `sexo` VARCHAR(45) NULL,
  `estadoCivil` VARCHAR(45) NULL,
  `CURP` VARCHAR(45) NULL,
  `visa_vigente` TINYINT NULL,
  `pasaporte_vigente` TINYINT NULL,
  `idEspecialidad` INT NOT NULL,
  `nivelExperiencia_idNivelExp` INT NOT NULL,
  `Usuario_idUsuario` VARCHAR(13) NOT NULL,
  PRIMARY KEY (`idUsuarioEmp`, `nivelExperiencia_idNivelExp`, `Usuario_idUsuario`),
  INDEX `fk_UsuarioEmpleado_Direccion1_idx` (`idDireccionEmpleado` ASC) VISIBLE,
  INDEX `fk_UsuarioEmpleado_nivelExperiencia1_idx` (`nivelExperiencia_idNivelExp` ASC) VISIBLE,
  INDEX `fk_UsuarioEmpleado_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_UsuarioEmpleado_Direccion1`
    FOREIGN KEY (`idDireccionEmpleado`)
    REFERENCES `ijalti`.`Direccion` (`idDireccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UsuarioEmpleado_nivelExperiencia1`
    FOREIGN KEY (`nivelExperiencia_idNivelExp`)
    REFERENCES `ijalti`.`nivelExperiencia` (`idNivelExp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UsuarioEmpleado_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `ijalti`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`Empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`Empresa` (
  `idEmpresa` INT NOT NULL,
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
    REFERENCES `ijalti`.`Direccion` (`idDireccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`Aplicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`Aplicacion` (
  `statusAplicacion` TINYINT NULL,
  `fechaSolicitud` DATE NULL,
  `UsuarioEmpleado_idUsuarioEmp` VARCHAR(13) NOT NULL,
  `UsuarioEmpleado_nivelExperiencia_idNivelExp` INT NOT NULL,
  `UsuarioEmpleado_Usuario_idUsuario` VARCHAR(13) NOT NULL,
  PRIMARY KEY (`UsuarioEmpleado_idUsuarioEmp`, `UsuarioEmpleado_nivelExperiencia_idNivelExp`, `UsuarioEmpleado_Usuario_idUsuario`),
  INDEX `fk_Aplicacion_UsuarioEmpleado1_idx` (`UsuarioEmpleado_idUsuarioEmp` ASC, `UsuarioEmpleado_nivelExperiencia_idNivelExp` ASC, `UsuarioEmpleado_Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Aplicacion_UsuarioEmpleado1`
    FOREIGN KEY (`UsuarioEmpleado_idUsuarioEmp` , `UsuarioEmpleado_nivelExperiencia_idNivelExp` , `UsuarioEmpleado_Usuario_idUsuario`)
    REFERENCES `ijalti`.`UsuarioEmpleado` (`idUsuarioEmp` , `nivelExperiencia_idNivelExp` , `Usuario_idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`Puesto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`Puesto` (
  `idPuesto` INT NOT NULL,
  `idEmpresaPuesto` INT NOT NULL,
  `nombrePuesto` VARCHAR(45) NULL,
  `modalidadTrabajo` VARCHAR(45) NULL,
  `tipoHorario` VARCHAR(45) NULL,
  `jornadaDeTrabajo` INT NULL,
  `areaConocimiento` VARCHAR(45) NULL,
  `idDireccionPuesto` INT NOT NULL,
  `nivelExperiencia_idNivelExp` INT NOT NULL,
  `idIdioma` INT NOT NULL,
  `Aplicacion_UsuarioEmpleado_idUsuarioEmp` VARCHAR(13) NOT NULL,
  `Aplicacion_UsuarioEmpleado_nivelExperiencia_idNivelExp` INT NOT NULL,
  `Aplicacion_UsuarioEmpleado_Usuario_idUsuario` VARCHAR(13) NOT NULL,
  PRIMARY KEY (`idPuesto`, `idEmpresaPuesto`, `nivelExperiencia_idNivelExp`, `Aplicacion_UsuarioEmpleado_idUsuarioEmp`, `Aplicacion_UsuarioEmpleado_nivelExperiencia_idNivelExp`, `Aplicacion_UsuarioEmpleado_Usuario_idUsuario`),
  INDEX `fk_Puesto_Direccion1_idx` (`idDireccionPuesto` ASC) VISIBLE,
  INDEX `fk_Puesto_Empresa1_idx` (`idEmpresaPuesto` ASC) VISIBLE,
  INDEX `fk_Puesto_nivelExperiencia1_idx` (`nivelExperiencia_idNivelExp` ASC) VISIBLE,
  INDEX `fk_Puesto_Aplicacion1_idx` (`Aplicacion_UsuarioEmpleado_idUsuarioEmp` ASC, `Aplicacion_UsuarioEmpleado_nivelExperiencia_idNivelExp` ASC, `Aplicacion_UsuarioEmpleado_Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Puesto_Direccion1`
    FOREIGN KEY (`idDireccionPuesto`)
    REFERENCES `ijalti`.`Direccion` (`idDireccion`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Puesto_Empresa1`
    FOREIGN KEY (`idEmpresaPuesto`)
    REFERENCES `ijalti`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Puesto_nivelExperiencia1`
    FOREIGN KEY (`nivelExperiencia_idNivelExp`)
    REFERENCES `ijalti`.`nivelExperiencia` (`idNivelExp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Puesto_Aplicacion1`
    FOREIGN KEY (`Aplicacion_UsuarioEmpleado_idUsuarioEmp` , `Aplicacion_UsuarioEmpleado_nivelExperiencia_idNivelExp` , `Aplicacion_UsuarioEmpleado_Usuario_idUsuario`)
    REFERENCES `ijalti`.`Aplicacion` (`UsuarioEmpleado_idUsuarioEmp` , `UsuarioEmpleado_nivelExperiencia_idNivelExp` , `UsuarioEmpleado_Usuario_idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`UsuarioEmpersa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`UsuarioEmpersa` (
  `Empresa_idEmpresa` INT NOT NULL,
  `Puesto_id_Puesto` INT NOT NULL,
  `Puesto_idEmpresaPuesto` INT NOT NULL,
  `sexo` VARCHAR(45) NULL,
  `CURP` VARCHAR(45) NULL,
  `nivelJerarquico` INT NULL,
  `Usuario_idUsuario` VARCHAR(13) NOT NULL,
  PRIMARY KEY (`Empresa_idEmpresa`, `Usuario_idUsuario`),
  INDEX `fk_UsuarioEmpresa_Empresa1_idx` (`Empresa_idEmpresa` ASC) VISIBLE,
  INDEX `fk_UsuarioEmpresa_Puesto1_idx` (`Puesto_id_Puesto` ASC, `Puesto_idEmpresaPuesto` ASC) VISIBLE,
  INDEX `fk_UsuarioEmpersa_Usuario1_idx` (`Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_UsuarioEmpresa_Empresa1`
    FOREIGN KEY (`Empresa_idEmpresa`)
    REFERENCES `ijalti`.`Empresa` (`idEmpresa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UsuarioEmpresa_Puesto1`
    FOREIGN KEY (`Puesto_id_Puesto` , `Puesto_idEmpresaPuesto`)
    REFERENCES `ijalti`.`Puesto` (`idPuesto` , `idEmpresaPuesto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_UsuarioEmpersa_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `ijalti`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`UsuarioAdmin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`UsuarioAdmin` (
  `admin` TINYINT NULL,
  `Usuario_idUsuario` VARCHAR(13) NOT NULL,
  PRIMARY KEY (`Usuario_idUsuario`),
  CONSTRAINT `fk_UsuarioAdmin_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `ijalti`.`Usuario` (`idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`Idioma`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`Idioma` (
  `idIdioma` INT NOT NULL,
  `lengua` VARCHAR(30) NULL,
  `Puesto_idPuesto` INT NOT NULL,
  `Puesto_idEmpresaPuesto` INT NOT NULL,
  `Puesto_nivelExperiencia_idNivelExp` INT NOT NULL,
  `Puesto_Aplicacion_UsuarioEmpleado_idUsuarioEmp` VARCHAR(13) NOT NULL,
  `Puesto_Aplicacion_UsuarioEmpleado_nivelExperiencia_idNivelExp` INT NOT NULL,
  `Puesto_Aplicacion_UsuarioEmpleado_Usuario_idUsuario` VARCHAR(13) NOT NULL,
  PRIMARY KEY (`idIdioma`, `Puesto_idPuesto`, `Puesto_idEmpresaPuesto`, `Puesto_nivelExperiencia_idNivelExp`, `Puesto_Aplicacion_UsuarioEmpleado_idUsuarioEmp`, `Puesto_Aplicacion_UsuarioEmpleado_nivelExperiencia_idNivelExp`, `Puesto_Aplicacion_UsuarioEmpleado_Usuario_idUsuario`),
  INDEX `fk_Idioma_Puesto1_idx` (`Puesto_idPuesto` ASC, `Puesto_idEmpresaPuesto` ASC, `Puesto_nivelExperiencia_idNivelExp` ASC, `Puesto_Aplicacion_UsuarioEmpleado_idUsuarioEmp` ASC, `Puesto_Aplicacion_UsuarioEmpleado_nivelExperiencia_idNivelExp` ASC, `Puesto_Aplicacion_UsuarioEmpleado_Usuario_idUsuario` ASC) VISIBLE,
  CONSTRAINT `fk_Idioma_Puesto1`
    FOREIGN KEY (`Puesto_idPuesto` , `Puesto_idEmpresaPuesto` , `Puesto_nivelExperiencia_idNivelExp` , `Puesto_Aplicacion_UsuarioEmpleado_idUsuarioEmp` , `Puesto_Aplicacion_UsuarioEmpleado_nivelExperiencia_idNivelExp` , `Puesto_Aplicacion_UsuarioEmpleado_Usuario_idUsuario`)
    REFERENCES `ijalti`.`Puesto` (`idPuesto` , `idEmpresaPuesto` , `nivelExperiencia_idNivelExp` , `Aplicacion_UsuarioEmpleado_idUsuarioEmp` , `Aplicacion_UsuarioEmpleado_nivelExperiencia_idNivelExp` , `Aplicacion_UsuarioEmpleado_Usuario_idUsuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`Tecnologias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`Tecnologias` (
  `idTecnologia` INT NOT NULL,
  `plataforma` VARCHAR(45) NULL,
  `nivelExp_idNivelExp` INT NOT NULL,
  `lenguajeProgramacion` VARCHAR(45) NULL,
  PRIMARY KEY (`idTecnologia`, `nivelExp_idNivelExp`),
  INDEX `fk_Tecnologia_nivelExp1_idx` (`nivelExp_idNivelExp` ASC) VISIBLE,
  CONSTRAINT `fk_Tecnologia_nivelExp1`
    FOREIGN KEY (`nivelExp_idNivelExp`)
    REFERENCES `ijalti`.`nivelExperiencia` (`idNivelExp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ijalti`.`Habilidades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ijalti`.`Habilidades` (
  `idHabilidades` INT NOT NULL,
  `habilidades` VARCHAR(45) NULL,
  `nivelExp_idNivelExp` INT NOT NULL,
  PRIMARY KEY (`idHabilidades`, `nivelExp_idNivelExp`),
  INDEX `fk_Habilidades_nivelExp1_idx` (`nivelExp_idNivelExp` ASC) VISIBLE,
  CONSTRAINT `fk_Habilidades_nivelExp1`
    FOREIGN KEY (`nivelExp_idNivelExp`)
    REFERENCES `ijalti`.`nivelExperiencia` (`idNivelExp`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;