import {config} from "../../../config/db.jsx"
var sql = require("mssql");
const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();


export default async function handler(req,res)
{
    //return res.status(200).json("Obteniendo info del usuario: "+req.query.id);
    switch(req.method)
    {   
        case "GET":
            if(req.query.tipo==="date")
            {
                return await (getDateVisaPas(req,res));
            }
            if(req.query.tipo==="general")
            {
                return await (getCurpUsuario(req,res));
            }
        case "DELETE":
            return await deleteUsuario(req,res);
            

            
        default:
            break;
    }

    //Aqui me traigo la informacion relacionada con la CURP 
    
}

const getDateVisaPas=async(req,res)=>
{
    const pool2 = await poolConnect
    const CURP=req.query.id

    const {idUsuarioEmpresa,email,razonSocial,passworUserdEmpresa,pais,ciudad,estado,cp}=req.body
    const input = "select format(visaVigente, 'D', 'en-gb') as fechaUtilVisa, format(pasaporteVigente, 'D', 'en-gb') as fechaUtilPasaporte from [dbo].[UsuarioEmpleado] where CURP = " + "'" + CURP + "'"
    //console.log(input)
    const result = await pool2.request()
        .input('input_parameter', sql.VarChar, 'Nada')
        .query(input)
    console.log("Visa Vigente: ",result);
    const resul = result.recordset[0];
    return res.status(200).json(resul);
}

const getCurpUsuario=async(req,res)=>
{
    const pool2 = await poolConnect
    const CURP=req.query.id

    const {idUsuarioEmpresa,email,razonSocial,passworUserdEmpresa,pais,ciudad,estado,cp}=req.body
    const input = "SELECT *FROM ((usuarioempleado INNER JOIN infoacademica on usuarioempleado.CURP =" + "'" + CURP + "'" +") INNER JOIN lenguajeprogramacion on usuarioempleado.CURP= " + "'" + CURP + "'" + ")"
    //console.log(input)
    const result = await pool2.request()
        .input('input_parameter', sql.VarChar, 'Nada')
        .query(input)
    //const[result]=await pool.query('SELECT*FROM usuarioempleado WHERE CURP = "SABC660121"');
    //console.log(CURP);
    //const[result]=await pool.query('SELECT*FROM usuarioempleado WHERE CURP = "'+CURP+'"');
    //const[result]=await pool.query('SELECT *FROM usuarioempleado INNER JOIN infoacademica WHERE usuarioempleado.CURP="'+CURP+'"');
    //const[result]=await pool.query('SELECT *FROM ((usuarioempleado INNER JOIN infoacademica on usuarioempleado.CURP="'+CURP+'") INNER JOIN lenguajeprogramacion on usuarioempleado.CURP="'+CURP+'")');   
    const resul = result.recordset[0];
    console.log("Join: ",result);
    return res.status(200).json(resul);
}


//DELETE
const deleteUsuario=async(req,res)=>
{
    const{CURP}=req.query;
    const[result]=await pool.query('DELETE FROM usuarioempleado WHERE CURP = "SABC660121"');
    //const[result]=await pool.query('DELETE FROM usuarioempleado WHERE CURP = ?',[CURP]);
    return res.status(200).json("Usuario eliminado");
}