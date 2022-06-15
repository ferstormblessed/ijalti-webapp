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
    
    let _puesto = req.body[0];
    let _modalidad = req.body[1];
    let _jornada = req.body[2];
    let _horario = req.body[3];
    let _idioma = req.body[4];
    let _areaConocimiento = req.body[5];
    
    //Puesto
    if (_puesto == "Puesto"){
        _puesto = "LIKE \'%_%\'";
    }
    else{
        _puesto = " = \'" + _puesto + "\'";
    }

    //Modalidad
    if (_modalidad == "Modalidad"){
        _modalidad = "LIKE \'%_%\'";
    }
    else{
        _modalidad = " = \'" + _modalidad + "\'";
    }

    //Jornada
    if (_jornada == "Jornada"){
        _jornada = "LIKE \'%_%\'";
    }
    else{
        _jornada = " = \'" + _jornada + "\'";
    }

    //Horario
    if (_horario == "Horario"){
        _horario = "LIKE \'%_%\'";
    }
    else{
        _horario = " = \'" + _horario + "\'";
    }

    //Area de conocimiento
    if (_areaConocimiento == "Area de conocimiento"){
        _areaConocimiento = "LIKE \'%_%\'";
    }
    else{
        _areaConocimiento = " = \'" + _areaConocimiento + "\'";
    }

    console.log("Filtros:", _puesto, _modalidad, _horario, _jornada, _areaConocimiento);
    //const [result] = await pool.query('SELECT * FROM puesto WHERE nombrePuesto "'+_puesto+'" AND modalidadTrabajo = "'+_modalidad+'" AND tipoHorario = "'+_horario+'" AND jornadaDeTrabajo = "'+_jornada+'" AND areaConocimiento = "'+_areaConocimiento+'" ');
    const queryText = 'SELECT * FROM puesto WHERE nombrePuesto ' + _puesto + ' AND modalidadTrabajo ' +  _modalidad +' AND tipoHorario ' + _horario + ' AND jornadaDeTrabajo ' + _jornada + ' AND areaConocimiento ' + _areaConocimiento;
    const [result] = await pool.query(queryText);
    console.log("Dentro de endpoint buscarEmpleo");

    console.log("result: ", result);
    return res.status(200).json(result);
}