import {pool} from "../../../config/db.jsx"
export default async function handler(req,res){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "POST":
            return await getCredentials(req,res)
    }
}

//POST
const getCredentials=async(req,res)=>
{
    console.log("Estoy en getMailPassword------------------");
    console.log(req);
    return(req);
}
