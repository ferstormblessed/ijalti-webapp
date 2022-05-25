import {pool} from "../../../config/db.jsx"
export default async function handler(req:any,res:any){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "GET":
            return await getUsuarios(req,res);
        case "POST":
            return await registrarUsuario(req,res);

    }
}

//GET
const getUsuarios=async(req:any,res:any)=>{
    const [result]=await pool.query("SELECT*FROM usuario")
    console.log(result);
    return res.status(200).json(result)
}

//POST
const registrarUsuario=async(req:any,res:any)=>
{
    const {idUsuarioEmp,first_name,last_name,email,uniEgreso,CV,aniosExperiencia,idDireccionEmpleado,
        sexo,estadoCivil,CURP,visa_vigente,pasaporte_vigente,idEspecialidad,nivelExperiencia_idNivelExp,Usuario_idUsuario}=req.body
            const [result]=await pool.query("INSERT INTO usuarioempleado SET ?",{
                idUsuarioEmp,
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
                Usuario_idUsuario
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({idUsuarioEmp,first_name,last_name,email,uniEgreso,CV,aniosExperiencia,idDireccionEmpleado,
        sexo,estadoCivil,CURP,visa_vigente,pasaporte_vigente,idEspecialidad,nivelExperiencia_idNivelExp,Usuario_idUsuario});
}