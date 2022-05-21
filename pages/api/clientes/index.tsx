import {pool} from "../../../config/db.jsx"
export default async function handler(req:any,res:any){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "GET":
            return res.status(200).json("Obteniendo la info de los clientes")
        case "POST":
            const {idUsuario,nombre,email,password}=req.body
            const [result]=await pool.query("INSERT INTO usuario SET ?",{
                idUsuario,
                nombre,
                email,
                password
            });//Esto inserta un dato dentro de la tabla
            return res.status(200).json({idUsuario,nombre,email,password});
    }
}