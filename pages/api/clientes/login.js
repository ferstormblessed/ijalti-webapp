import { data } from "autoprefixer";
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
    const {data:login}=req.body
    console.log(login.email);
    console.log(login.password);
    
            const [result]=await pool.query('SELECT CURP FROM usuarioempleado WHERE email="'+login.data+'" and usuarioempleado.password="'+login.password+'"');
            console,log("result: ",result);
            return res.status(200).json({email,password});
}

