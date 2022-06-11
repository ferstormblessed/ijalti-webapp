import {pool} from '../../../config/db';//Aqui me traigo mi base de datos


export default async function handler(req,res)
{
    //return res.status(200).json("Obteniendo info del usuario: "+req.query.id);
    switch(req.method)
    {   
        case "GET":
        return await (getCurpUsuario(req,res))

        case "DELETE":
            return await deleteUsuario(req,res);
            

            
        default:
            break;
    }

    //Aqui me traigo la informacion relacionada con la CURP 
    
}

const getCurpUsuario=async(req,res)=>
{
    const CURP=req.query.id
    //const[result]=await pool.query('SELECT*FROM usuarioempleado WHERE CURP = "SABC660121"');
    //console.log(CURP);
    const[result]=await pool.query('SELECT*FROM usuarioempleado WHERE CURP = "'+CURP+'"');
    return res.status(200).json(result[0]);
}

//DELETE
const deleteUsuario=async(req,res)=>
{
    const{CURP}=req.query;
    const[result]=await pool.query('DELETE FROM usuarioempleado WHERE CURP = "SABC660121"');
    //const[result]=await pool.query('DELETE FROM usuarioempleado WHERE CURP = ?',[CURP]);
    return res.status(200).json("Usuario eliminado");
}