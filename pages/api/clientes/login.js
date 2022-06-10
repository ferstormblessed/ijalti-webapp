import {pool} from "../../../config/db.jsx"
export default async function handler(req,res){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "POST":
            return await Verifica(req,res)
    }
}


const Verifica=async(req,res)=>
{
    console.log(typeof req);
    
    const mail=req.body.email
    const pass=req.body.password
    console.log("req.body.mail:",mail);
    console.log("req.body.password:",pass);
    const [result]=await pool.query('SELECT CURP FROM usuarioempleado WHERE email="'+mail+'" and usuarioempleado.password="'+pass+'"');
    console.log("result: ",result);
    return res.status(200).json({result});
}