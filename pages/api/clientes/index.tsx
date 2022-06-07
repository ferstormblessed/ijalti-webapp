import {pool} from "../../../config/db.jsx"
export default async function handler(req:any,res:any){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "GET":
            return await (getUsuarios(req,res))
            
        case "POST":
            {
                return await(registrarUsuario(req,res),registrarLenguajeProgramacion(req,res))
            }
           

    }
}


//GET
const getUsuarios=async(req:any,res:any)=>{
    const [result]=await pool.query("SELECT*FROM usuarioempleado")
    console.log(result);
    return res.status(200).json(result)
}
/*
const getLenguaje=async(req:any,res:any)=>{
    const [result]=await pool.query("SELECT*FROM lenguajeprogramacion")
    console.log(result);
    return res.status(200).json(result)
}*/



//POST
const registrarUsuario=async(req:any,res:any)=>
{
    const {nombre,apellidoP,apellidoM,email,password,CV,aniosExperiencia,
        sexo,estadoCivil,CURP,RFC,visa_vigente,pasaporte_vigente}=req.body
            const [result]=await pool.query("INSERT INTO usuarioempleado SET ?",{
                nombre,
                apellidoP,
                apellidoM,
                email,
                password,
                CV,
                aniosExperiencia,
                sexo,
                estadoCivil,
                CURP,
                RFC,
                visa_vigente,
                pasaporte_vigente
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({nombre,apellidoP,apellidoM,email,password,CV,aniosExperiencia,
        sexo,estadoCivil,CURP,RFC,visa_vigente,pasaporte_vigente});

}

const registrarLenguajeProgramacion=async(req:any,res:any)=>
{
    const {nombreLenguaje,aniosDePractica}=req.body
            const [result]=await pool.query("INSERT INTO lenguajeprogramacion SET ?",{
                nombreLenguaje,
                aniosDePractica,
                
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({nombreLenguaje,aniosDePractica});
}
