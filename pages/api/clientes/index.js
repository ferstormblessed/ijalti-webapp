import {pool} from "../../../config/db.jsx"
export default async function handler(req,res){
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
                
                else if(req.query.tipo==="usuarioEmpresa")
                {
                    return await (registrarUsuarioEmpresa(req,res))
                }      
                
            }
           

    }
}


//GET
const getUsuarios=async(req,res)=>{
    const [result]=await pool.query("SELECT*FROM usuarioempleado")
    console.log(result);
    return res.status(200).json(result)
}

const getLenguaje=async(req,res)=>{
    const [result]=await pool.query("SELECT*FROM lenguajeprogramacion")
    console.log(result);
    return res.status(200).json(result)
}



//POST
/*
const registrarDireccion=async(req,res)=>
{
    const {pais,ciudad,estado,calle,cp,numExterior}=req.body
            const [result]=await pool.query("INSERT INTO direccion SET ?",{
                pais,
                ciudad,
                estado,
                calle,
                cp,
                numExterior
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({pais,ciudad,estado,calle,cp,numExterior});
}
*/

const registrarUsuario=async(req,res)=>
{
    const {nombre,apellidoP,apellidoM,email,password,CV,imageData,
        sexo,estadoCivil,CURP,RFC,visaVigente,pasaporteVigente,pais,ciudad,estado,calle,cp,numExterior,about}=req.body
            const [result]=await pool.query("INSERT INTO usuarioempleado SET ?",{
                nombre,
                apellidoP,
                apellidoM,
                email,
                password,
                CV,
                imageData,
                sexo,
                estadoCivil,
                CURP,
                RFC,
                visaVigente,
                pasaporteVigente,
                pais,
                ciudad,
                estado,
                calle,
                cp,
                numExterior,
                about
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({nombre,apellidoP,apellidoM,email,password,CV,imageData,
        sexo,estadoCivil,CURP,RFC,visaVigente,pasaporteVigente,pais,ciudad,estado,calle,cp,numExterior,about});
}


const registrarLenguajeProgramacion=async(req,res)=>
{
    const {nombreLenguaje,aniosDePractica,CURP}=req.body
            const [result]=await pool.query("INSERT INTO lenguajeprogramacion SET ?",{
                nombreLenguaje,
                aniosDePractica,
                CURP
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({nombreLenguaje,aniosDePractica,CURP});
}

const registrarInfoAcademica=async(req,res)=>
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

const registrarUsuarioEmpresa=async(req,res)=>
{
    const {idUsuarioEmpresa,email,razonSocial,passworUserdEmpresa,pais,ciudad,estado,cp}=req.body
            const [result]=await pool.query("INSERT INTO usuarioempresa SET ?",{
                idUsuarioEmpresa,
                email,
                razonSocial,
                passworUserdEmpresa,
                pais,
                ciudad,
                estado,
                cp
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({idUsuarioEmpresa,email,razonSocial,passworUserdEmpresa,pais,ciudad,estado,cp});
}


