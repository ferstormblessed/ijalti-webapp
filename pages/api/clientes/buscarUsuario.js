import {config} from "../../../config/db.jsx"
var sql = require("mssql");
const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();

export default async function handler(req,res){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "POST":
            return await (BuscarUsuario(req, res)); 
    }
}

const BuscarUsuario = async(req, res) => {
    console.log(typeof req);
    
    console.log("Req.body", req.body);
    console.log("Req.body[0]", req.body.CURP);
    
    let _nombre = req.body.nombre;
    let _CURP = req.body.CURP;
    
    //nombre
    if (_nombre == ""){
        _nombre = "LIKE \'%_%\'";
    }
    else{
        _nombre = " = \'" + _nombre + "\'";
    }

    //curp
    if (_CURP == ""){
        _CURP = "LIKE \'%_%\'";
    }
    else{
        _CURP = " = \'" + _CURP + "\'";
    }

    console.log("Filtros:", _nombre, _CURP);


    const pool2 = await poolConnect
    const input = "Select * from [dbo].[UsuarioEmpleado] where nombre "   + _nombre   + " and CURP " +   _CURP 
    
    //console.log(input)
    const result = await pool2.request()
            .input('input_parameter', sql.VarChar, 'Nada')
            .query(input)  
    //const [result] = await pool.query('SELECT * FROM puesto WHERE nombrePuesto "'+_puesto+'" AND modalidadTrabajo = "'+_modalidad+'" AND tipoHorario = "'+_horario+'" AND jornadaDeTrabajo = "'+_jornada+'" AND areaConocimiento = "'+_areaConocimiento+'" ');
    //const queryText = 'SELECT * FROM usuarioempleado WHERE nombre ' + _nombre + ' AND CURP ' +  _CURP;
    console.log(input);
    console.log("Dentro de endpoint buscarUsuario", result);
    const resul = result.recordset;
    return res.status(200).json(resul);
}