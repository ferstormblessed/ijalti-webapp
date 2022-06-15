import {pool} from "../../../config/db.jsx"
import axios from "axios";
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
    
    const mail=req.body.email
    const pass=req.body.passworUserdEmpresa
    console.log("req.body.mail:",mail);
    console.log("req.body.password:",pass);
    const [result]=await pool.query('SELECT idUsuarioEmpresa FROM UsuarioEmpresa WHERE email="'+mail+'" and UsuarioEmpresa.passworUserdEmpresa="'+pass+'"');
    console.log("result: ",result);
    //await axios.post('http://localhost:3000/api/clientes/getMailPassword',result);
    return res.status(200).json({result});
}