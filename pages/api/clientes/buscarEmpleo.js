import {pool} from "../../../config/db.jsx"
export default async function handler(req,res){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "POST":
            return await BuscarEmpleo(req, res);

    }
}

//POST
const BuscarEmpleo = async(req, res) => {
    console.log(typeof req);
    
    const _puesto = req.body.puesto;
    const _modalidad = req.body.modalidad;
    const _jornada = req.body.jornada;
    const _horario = req.body.horario;
    const _areaConocimiento = req.body.areaConocimiento;
    const _idioma = req.body.idioma;


    // console.log("req.body.mail:", _puesto);
    // console.log("req.body.password:", _modalidad);
    
    const [result] = await pool.query('SELECT * FROM Puesto WHERE nombrePuesto = " '+_puesto+' " AND modalidadTrabajo = " '+_modalidad+' " AND tipoHorario = "'+_horario+'" AND jornadaDeTrabajo = "'+_jornada+'" AND areaConocimiento = "'+_areaConocimiento+'" ');
    console.log("result: ", result);
    return res.status(200).json({result});
}