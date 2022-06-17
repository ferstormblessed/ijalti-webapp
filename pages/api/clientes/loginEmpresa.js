import {config} from "../../../config/db.jsx"
var sql = require("mssql");
const pool = new sql.ConnectionPool(config);
const poolConnect = pool.connect();


export default async function handler(req,res){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "POST":
            return await VerificaUsuario(req,res)
    }
}


//POST
const VerificaUsuario=async(req,res)=>
{
    console.log(typeof req);
    console.log("req.body:",req.body);
    const mail=req.body.email
    const pass=req.body.passworEmpresa
    console.log("req.body.mail:",mail);
    console.log("req.body.password:",pass);

    const pool2 = await poolConnect
    const input = "Select idUsuarioEmpresa from [dbo].[UsuarioEmpresa] where email=" + "'" + mail + "'" + "and passworUserdEmpresa = " + "'" + pass + "'"
    
    //console.log(input)
    const result = await pool2.request()
            .input('input_parameter', sql.VarChar, 'Nada')
            .query(input)  
    const resul = result.recordset[0];

    console.log("result empresa: ",resul);
    //await axios.post('http://localhost:3000/api/clientes/getMailPassword',result);
    return res.status(200).json({resul});
}
