import {pool} from "../../../config/db.jsx"
export default async function handler(req,res){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "GET":
            return await (getUsuarios(req,res))
    }
}

const getUsuarios=async(req,res)=>{
    const mail=req.query.email
    const pass=req.query.password
    console.log("email:",mail)
    console.log("email:",password)
    const [result]=await pool.query('SELECT CURP FROM usuarioempleado WHERE email="'+email+'" and usuarioempleado.password="'+lop+'"');
    console.log(result);
    return res.status(200).json(result)
}