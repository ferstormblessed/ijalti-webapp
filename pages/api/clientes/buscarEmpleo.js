import {pool} from "../../../config/db.jsx"
export default async function handler(req,res){
    /*Consultamos la base de datos y devolvemos un objeto al ususario*/

    switch(req.method)
    {
        case "POST":
            if(req.query.tipo==="puesto")
            {
                return await BuscarPuesto(req, res);
            }
            else if(req.body.tipo==="modalidad")
            {
                return await BuscarModalidad(req, res);
            }
            

    }
}

//POST
const BuscarPuesto = async(req, res) => {
    console.log(typeof req);
    
    const _puesto = req.body.name;
    /*
    const _modalidad = req.body.modalidad;
    const _jornada = req.body.jornada;
    const _horario = req.body.horario;
    const _areaConocimiento = req.body.areaConocimiento;
    const _idioma = req.body.idioma;
    */
    console.log("Req: ",req.body);
    console.log("Puesto: ",_puesto);
    

    // console.log("req.body.mail:", _puesto);
    // console.log("req.body.password:", _modalidad);
    
   //const [result] = await pool.query('SELECT * FROM Puesto WHERE nombrePuesto = " '+_puesto+' " AND modalidadTrabajo = " '+_modalidad+' " AND tipoHorario = "'+_horario+'" AND jornadaDeTrabajo = "'+_jornada+'" AND areaConocimiento = "'+_areaConocimiento+'" ');
   const [result] = await pool.query('SELECT * FROM puesto WHERE nombrePuesto ="'+_puesto+'"');
    console.log("Dentro de endpoint buscarEmpleo");

    console.log("result: ", result);
    return res.status(200).json(result[0]);
}

const BuscarModalidad = async(req, res) => {
    const _modalidad = req.body.name;
    console.log("Req: ",req.body);
    console.log("Puesto: ",_modalidad);
    
    //const [result] = await pool.query('SELECT * FROM puesto WHERE nombrePuesto ="'+_modalidad+'"');
    const [result] = await pool.query('SELECT * FROM usuarioempleado WHERE CURP ="SABC660121"');
    console.log("result: ", result);
    return res.status(200).json(result[0]);
}