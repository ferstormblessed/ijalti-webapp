import {pool} from '../../../config/db';//Aqui me traigo mi base de datos


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
    const CURP=req.query.id
    const[result]=await pool.query('select date_format(visaVigente, "%M %d %Y") as fechaUtilVisa,date_format(pasaporteVigente, "%M %d %Y") as fechaUtilPasaporte from usuarioempleado WHERE CURP="'+CURP+'"');
    //const[result]=await pool.query('select visaVigente from usuarioempleado WHERE CURP="'+CURP+'"');

    console.log("Visa Vigente: ",result);
    return res.status(200).json(result[0]);
}

const getCurpUsuario=async(req,res)=>
{
    const CURP=req.query.id
    //const[result]=await pool.query('SELECT*FROM usuarioempleado WHERE CURP = "SABC660121"');
    //console.log(CURP);
    //const[result]=await pool.query('SELECT*FROM usuarioempleado WHERE CURP = "'+CURP+'"');
    //const[result]=await pool.query('SELECT *FROM usuarioempleado INNER JOIN infoacademica WHERE usuarioempleado.CURP="'+CURP+'"');
    const[result]=await pool.query('SELECT *FROM ((usuarioempleado INNER JOIN infoacademica on usuarioempleado.CURP="'+CURP+'") INNER JOIN lenguajeprogramacion on usuarioempleado.CURP="'+CURP+'")');   
    console.log("Join: ",result);
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