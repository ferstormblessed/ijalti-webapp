DROP DATABASE IF EXISTS ijalti;
CREATE DATABASE ijalti;
USE ijalti;

CREATE TABLE Idioma(
    idIdioma INT AUTO_INCREMENT, /*autoinc*/
    idPuesto INT,
    CURP VARCHAR(18),
    lengua VARCHAR(30)
    PRIMARY KEY (idIdioma),
    FOREIGN KEY (CURP) REFERENCES UsuarioEmpleado(CURP),
    FOREIGN KEY (idPuesto) REFERENCES Puesto(idPuesto)
);

CREATE TABLE Direccion(
    idDireccion INT AUTO_INCREMENT, /*autoinc*/
    calle VARCHAR(20),
    numExterior INT,
    cp INT,
    ciudad VARCHAR(20),
    estado VARCHAR(40),
    municipio VARCHAR(40),
    PRIMARY KEY (idDireccion)
);

CREATE TABLE UsuarioEmpleado(
	CURP VARCHAR(18),
    nombre VARCHAR(40),
    apellidoP VARCHAR(40),
    apellidoM VARCHAR(40),
    email VARCHAR(40),
    passwordUserEmpleado VARCHAR(45),
    CV VARCHAR(45),
    aniosExperiencia INT,
    sexo VARCHAR(40),
    estadoCivil VARCHAR(20),
    RFC VARCHAR(13),
    visaVigente DATE,
    pasaporteVigente DATE,
    PRIMARY KEY (CURP),
);
idDireccionEmpleado INT,
FOREIGN KEY (idDireccionEmpleado) REFERENCES Direccion(idDireccion)

CREATE TABLE LenguajeProgramacion(
    idLenguajeProgramacion INT AUTO_INCREMENT, /*autoinc*/
    CURP VARCHAR(18),
    nombreLenguaje VARCHAR(40),
    aniosDePractica INT,
    PRIMARY KEY (idLenguajeProgramacion),
    FOREIGN KEY (CURP) REFERENCES UsuarioEmpleado(CURP)
);

CREATE TABLE InfoAcademica(
    idExperiencia INT AUTO_INCREMENT, /*autoinc*/
    idUsuarioEmp VARCHAR(18),
    tituloProfesion VARCHAR(30),
    areaEspecialidad VARCHAR(30),
    UniEgreso VARCHAR(40)
    PRIMARY KEY (idExperiencia),
    FOREIGN KEY (CURP) REFERENCES UsuarioEmpleado(CURP)
);

CREATE TABLE Puesto(
    idPuesto INT AUTO_INCREMENT, /*autoinc*/
    idUsuarioEmpresaCreador VARCHAR(18),
    idEmpresa INT,
    idDireccionPuesto INT,
    nombrePuesto VARCHAR(40),
    modalidadTrabajo VARCHAR(40),
    tipoHorario VARCHAR(40),
    jornadaDeTrabajo INT,
    areaConocimiento VARCHAR(40)
    PRIMARY KEY (idPuesto),
    FOREIGN KEY (idUsuarioEmpresaCreador) REFERENCES UsuarioEmpresa(idUsuarioEmpresa),
    FOREIGN KEY (idEmpresa) REFERENCES Empresa(idEmpresa),
    FOREIGN KEY (idDireccionPuesto) REFERENCES Direccion(idDireccion)
);

CREATE TABLE Aplicacion(
    idUsuarioAplicante VARCHAR(18),
    idPuestoAplicado INT,
    estatusAplicacion BOOLEAN,
    fechaSolicitud DATE
    PRIMARY KEY (idUsuarioAplicante),
    PRIMARY KEY (idPuestoAplicado),
    FOREIGN KEY (idUsuarioAplicante) REFERENCES UsuarioEmpleado(CURP),
    FOREIGN KEY (idPuestoAplicado) REFERENCES Puesto(idPuesto)
);

CREATE TABLE Empresa(
    idEmpresa INT AUTO_INCREMENT, /*autoinc*/
    nombreEmpresa VARCHAR(40),
    idDireccionEmpresa INT,
    razonSocial VARCHAR(45),
    CFDI VARCHAR(45),
    descripcion VARCHAR(40)
    PRIMARY KEY (idEmpresa),
    FOREIGN KEY (idDireccionEmpresa) REFERENCES Direccion(idDireccion)
);

CREATE TABLE UsuarioEmpresa(
    idUsuarioEmpresa VARCHAR(18),
    idEmpresa INT,
    nombre VARCHAR(40),
    apellidoP VARCHAR(40),
    apellidoM VARCHAR(40),
    email VARCHAR(40),
    passworUserdEmpresa VARCHAR(45)
    PRIMARY KEY (idUsuarioEmpresa),
    PRIMARY KEY (idEmpresa),
    FOREIGN KEY (idEmpresa) REFERENCES Empresa(idEmpresa)
);