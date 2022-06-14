export class clasePuesto {
    /*
    <---------- Constructor con parametros ---------->
    */ 
    constructor(idPuesto=0, nombrePuesto='', tipoHorario='', modalidadTrabajo='', areaConocimiento='', jornadaTrabajo='', idioma='') {
        this.idPuesto = idPuesto;
        this.nombrePuesto = nombrePuesto;
        this.tipoHorario = tipoHorario;
        this.modalidadTrabajo = modalidadTrabajo;
        this.areaConocimiento = areaConocimiento;
        this.jornadaTrabajo = jornadaTrabajo;
        this.idioma = idioma;
    }

    /*
    <---------- Getters ---------->
    */ 

    getIDPuesto(){
        return this.idPuesto;
    }

    getNombrePuesto(){
        return this.nombrePuesto;
    }

    getTipoHorario(){
        return this.tipoHorario;
    }

    getModalidadTrabajo(){
        return this.modalidadTrabajo;
    }

    getAreaConocimiento(){
        return this.areaConocimiento;
    }

    getJornadaTrabajo(){
        return this.jornadaTrabajo;
    }

    getIdioma(){
        return this.idioma;
    }

    /*
    <---------- Setters ---------->
    */ 
    setIDPuesto(_idPuesto){
        this.idPuesto = _idPuesto;
    }

    setNombrePuesto(_nombrePuesto){
        this.nombrePuesto = _nombrePuesto;
    }

    setTipoHorario(_tipoHorario){
        this.tipoHorario = _tipoHorario;
    }

    setModalidadTrabajo(_modalidadTrabajo){
        this.modalidadTrabajo = _modalidadTrabajo;
    }

    setAreaConocimiento(_areaConocimiento){
        this.areaConocimiento = _areaConocimiento;
    }

    setJornadaTrabajo(_jornadaTrabajo){
        this.jornadaTrabajo = _jornadaTrabajo;
    }

    setIdioma(_idioma){
        this.idioma = _idioma;
    }
}
  