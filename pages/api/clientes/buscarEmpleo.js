import {pool} from "../../../config/db.jsx"
export default async function handler(req,res){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "POST":
            return await BuscarEmpleo(req,res)
    }
}

//POST
const BuscarEmpleo = async(req, res) => {
    console.log(typeof req);
    
    const _puesto = req.body.puesto.name;
    const _modalidad = req.body.modalidad.name;
    const _jornada = req.body.jornada.name;
    const _horario = req.body.horario.name;
    const _areaConocimiento = req.body.areaConocimiento.name;
    const _idioma = req.body.idioma.name;


    console.log("req.body.mail:", _puesto);
    console.log("req.body.password:", _modalidad);
    
    // const [result] = await pool.query('SELECT CURP FROM usuarioempleado WHERE email="'+mail+'" and usuarioempleado.password="'+pass+'"');
    // console.log("result: ",result);
    return res.status(200);
}