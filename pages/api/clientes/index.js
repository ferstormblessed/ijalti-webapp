import { config } from "../../../config/db.jsx";
var sql = require("mssql");

const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

export default async function handler(req, res) {
  /*Consultamos la base de datos y devolvemos un objeto al ususario*/

  switch (req.method) {
    case "GET":
      return await getUsuarios(req, res);

    case "POST": {
      if (req.query.tipo === "usuario") {
        console.log(req.query.tipo);
        return await registrarUsuario(req, res);
      } else if (req.query.tipo === "lenguaje") {
        return await registrarLenguajeProgramacion(req, res);
      } else if (req.query.tipo === "info") {
        return await registrarInfoAcademica(req, res);
      } else if (req.query.tipo === "usuarioEmpresa") {
        return await registrarUsuarioEmpresa(req, res);
      }
    }
  }
}

//GET
const getUsuarios = async (req, res) => {
  const pool2 = await poolConnect;
  const input = "SELECT * FROM [dbo].[UsuarioEmpleado]";

  //console.log(input)
  const result = await pool2
    .request()
    .input("input_parameter", sql.VarChar, "Nada")
    .query(input);
  //console.log(result);
  return res.status(200).json(result);
};

/*
const getLenguaje=async(req,res)=>{
    const [result]=await pool.query("SELECT*FROM lenguajeprogramacion")
    console.log(result);
    return res.status(200).json(result)
}
*/

//POST
/*
const registrarDireccion=async(req,res)=>
{
    const {pais,ciudad,estado,calle,cp,numExterior}=req.body
            const [result]=await pool.query("INSERT INTO direccion SET ?",{
                pais,
                ciudad,
                estado,
                calle,
                cp,
                numExterior
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({pais,ciudad,estado,calle,cp,numExterior});
}
*/

const registrarUsuario = async (req, res) => {
  const pool2 = await poolConnect;

  const {
    nombre,
    apellidoP,
    apellidoM,
    email,
    password,
    CV,
    sexo,
    estadoCivil,
    CURP,
    RFC,
    visaVigente,
    pasaporteVigente,
    pais,
    ciudad,
    estado,
    calle,
    cp,
    numExterior,
    about,
  } = req.body;
  const input =
    "Insert into [dbo].[UsuarioEmpleado] (CURP, nombre, apellidoP, apellidoM, email, password, sexo, estadoCivil, RFC, visaVigente, pasaporteVigente, pais, ciudad, estado, calle, cp, numExterior, about) values (" +
    "'" +
    CURP +
    "'" +
    "," +
    "'" +
    nombre +
    "'" +
    "," +
    "'" +
    apellidoP +
    "'" +
    ", " +
    "'" +
    apellidoM +
    "'" +
    ", " +
    "'" +
    email +
    "'" +
    ", " +
    "'" +
    password +
    "'" +
    ", " +
    "'" +
    sexo +
    "'" +
    ", " +
    "'" +
    estadoCivil +
    "'" +
    ", " +
    "'" +
    RFC +
    "'" +
    ", " +
    "'" +
    visaVigente +
    "'" +
    ", " +
    "'" +
    pasaporteVigente +
    "'" +
    ", " +
    "'" +
    pais +
    "'" +
    ", " +
    "'" +
    ciudad +
    "'" +
    ", " +
    "'" +
    estado +
    "'" +
    ", " +
    "'" +
    calle +
    "'" +
    ", " +
    cp +
    ", " +
    numExterior +
    ", " +
    "'" +
    about +
    "'" +
    ") ";

  //console.log(input)
  const result = await pool2
    .request()
    .input("input_parameter", sql.VarChar, "Nada")
    .query(input);
  //console.log(result)

  return res.status(200).json({
    nombre,
    apellidoP,
    apellidoM,
    email,
    password,
    CV,
    sexo,
    estadoCivil,
    CURP,
    RFC,
    visaVigente,
    pasaporteVigente,
    pais,
    ciudad,
    estado,
    calle,
    cp,
    numExterior,
    about,
  });
};

const registrarLenguajeProgramacion = async (req, res) => {
  const pool2 = await poolConnect;

  const { nombreLenguaje, aniosDePractica, CURP } = req.body;

  const input =
    "Insert into [dbo].[LenguajeProgramacion] values (" +
    "'" +
    CURP +
    "'" +
    ", " +
    "'" +
    nombreLenguaje +
    "'" +
    ", " +
    "'" +
    aniosDePractica +
    "'" +
    ") ";
  //console.log(input)
  const result = await pool2
    .request()
    .input("input_parameter", sql.VarChar, "Nada")
    .query(input);

  return res.status(200).json({ nombreLenguaje, aniosDePractica, CURP });
};

const registrarInfoAcademica = async (req, res) => {
  const pool2 = await poolConnect;

  const { tituloProfesion, areaEspecialidad, Uniegreso, CURP } = req.body;

  const input =
    "Insert into [dbo].[InfoAcademica] values (" +
    "'" +
    CURP +
    "'" +
    ", " +
    "'" +
    tituloProfesion +
    "'" +
    ", " +
    "'" +
    areaEspecialidad +
    "'" +
    ", " +
    "'" +
    Uniegreso +
    "'" +
    ") ";
  //console.log(input)
  const result = await pool2
    .request()
    .input("input_parameter", sql.VarChar, "Nada")
    .query(input);
  return res
    .status(200)
    .json({ tituloProfesion, areaEspecialidad, Uniegreso, CURP });
};

const registrarUsuarioEmpresa = async (req, res) => {
  const pool2 = await poolConnect;
  const {
    idUsuarioEmpresa,
    email,
    razonSocial,
    passworUserdEmpresa,
    pais,
    ciudad,
    estado,
    cp,
  } = req.body;
  const input =
    "Insert into [dbo].[UsuarioEmpresa] values (" +
    "'" +
    idUsuarioEmpresa +
    "'" +
    ", " +
    "'" +
    email +
    "'" +
    ", " +
    "'" +
    razonSocial +
    "'" +
    ", " +
    "'" +
    passworUserdEmpresa +
    "'" +
    ", " +
    "'" +
    pais +
    "'" +
    ", " +
    "'" +
    ciudad +
    "'" +
    ", " +
    "'" +
    estado +
    "'" +
    ", " +
    cp +
    ") ";
  //console.log(input)
  const result = await pool2
    .request()
    .input("input_parameter", sql.VarChar, "Nada")
    .query(input);
  return res.status(200).json({
    idUsuarioEmpresa,
    email,
    razonSocial,
    passworUserdEmpresa,
    pais,
    ciudad,
    estado,
    cp,
  });
};
