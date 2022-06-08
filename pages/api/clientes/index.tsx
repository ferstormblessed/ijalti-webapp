import {pool} from "../../../config/db.jsx"
export default async function handler(req:any,res:any){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "GET":
            return await (getUsuarios(req,res))
            
        case "POST":
            {
                if(req.query.tipo==="usuario")
                {
                    console.log(req.query.tipo);
                    return await (registrarUsuario(req,res))
                }
                else if(req.query.tipo==="lenguaje")
                {
                    return await (registrarLenguajeProgramacion(req,res))
                }
                else if(req.query.tipo==="info")
                {
                    return await (registrarInfoAcademica(req,res))
                }   
            }
           

    }
}


//GET
const getUsuarios=async(req:any,res:any)=>{
    const [result]=await pool.query("SELECT*FROM usuarioempleado")
    console.log(result);
    return res.status(200).json(result)
}

const getLenguaje=async(req:any,res:any)=>{
    const [result]=await pool.query("SELECT*FROM lenguajeprogramacion")
    console.log(result);
    return res.status(200).json(result)
}



//POST
const registrarUsuario=async(req:any,res:any)=>
{
    const {nombre,apellidoP,apellidoM,email,password,CV,
        sexo,estadoCivil,CURP,RFC,visaVigente,pasaporteVigente}=req.body
            const [result]=await pool.query("INSERT INTO usuarioempleado SET ?",{
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
                pasaporteVigente
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({nombre,apellidoP,apellidoM,email,password,CV,
        sexo,estadoCivil,CURP,RFC,visaVigente,pasaporteVigente});
}


const registrarLenguajeProgramacion=async(req:any,res:any)=>
{
    const {nombreLenguaje,aniosDePractica,CURP}=req.body
            const [result]=await pool.query("INSERT INTO lenguajeprogramacion SET ?",{
                nombreLenguaje,
                aniosDePractica,
                CURP
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({nombreLenguaje,aniosDePractica,CURP});
}

const registrarInfoAcademica=async(req:any,res:any)=>
{
    const {tituloProfesion,areaEspecialidad,Uniegreso,CURP}=req.body
            const [result]=await pool.query("INSERT INTO infoacademica SET ?",{
                tituloProfesion,
                areaEspecialidad,
                Uniegreso,
                CURP
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({tituloProfesion,areaEspecialidad,Uniegreso,CURP});
}