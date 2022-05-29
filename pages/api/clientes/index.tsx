import {pool} from "../../../config/db.jsx"
export default async function handler(req:any,res:any){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "GET":
            return await getUsuarios(req,res);
            //return await getUsuario(req,res);
        case "POST":
            return await registrarUsuario(req,res);

    }
}


//GET
const getUsuarios=async(req:any,res:any)=>{
    const [result]=await pool.query("SELECT*FROM usuarioempleado")
    console.log(result);
    return res.status(200).json(result)
}


//POST
const registrarUsuario=async(req:any,res:any)=>
{
    const {first_name,last_name,email,uniEgreso,CV,aniosExperiencia,idDireccionEmpleado,
        sexo,estadoCivil,CURP,visa_vigente,pasaporte_vigente,idEspecialidad,nivelExperiencia_idNivelExp}=req.body
            const [result]=await pool.query("INSERT INTO usuarioempleado SET ?",{
                first_name,
                last_name,
                email,
                uniEgreso,
                CV,
                aniosExperiencia,
                idDireccionEmpleado,
                sexo,
                estadoCivil,
                CURP,
                visa_vigente,
                pasaporte_vigente,
                idEspecialidad,
                nivelExperiencia_idNivelExp,
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({first_name,last_name,email,uniEgreso,CV,aniosExperiencia,idDireccionEmpleado,
        sexo,estadoCivil,CURP,visa_vigente,pasaporte_vigente,idEspecialidad,nivelExperiencia_idNivelExp});
}
