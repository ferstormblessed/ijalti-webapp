import {pool} from "../../../config/db.jsx"
export default async function handler(req,res){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "POST":
            return await (BuscarEmpleo(req, res)); 
    }
}

const BuscarEmpleo = async(req, res) => {
    console.log(typeof req);
    
    const _puesto = req.body[0];
    const _modalidad = req.body[1];
    const _jornada = req.body[2];
    const _horario = req.body[3];
    const _idioma = req.body[4];
    const _areaConocimiento = req.body[5];

    console.log("Req: ", req.body);
    console.log("Puesto: ", _puesto);
    
    const [result] = await pool.query('SELECT * FROM puesto WHERE nombrePuesto = "'+_puesto+'" AND modalidadTrabajo = "'+_modalidad+'" AND tipoHorario = "'+_horario+'" AND jornadaDeTrabajo = "'+_jornada+'" AND areaConocimiento = "'+_areaConocimiento+'" ');
    //const [result] = await pool.query('SELECT * FROM puesto WHERE nombrePuesto ="'+_puesto+'"');
    console.log("Dentro de endpoint buscarEmpleo");

    console.log("result: ", result);
    return res.status(200).json(result[0]);
}