export class claseUsuario {
    /*
    <---------- Constructor con parametros ---------->
    */ 
    constructor(nombre='', CURP='') {
        this.nombre = nombre;
        this.CURP = CURP;
    }

    /*
    <---------- Getters ---------->
    */ 

    getNombre(){
        return this.nombre;
    }

    getCURP(){
        return this.CURP;
    }
    /*
    <---------- Setters ---------->
    */ 
    setNombre(_Nombre){
        this.nombre = _Nombre;
    }

    setCURP(_CURP){
        this.CURP = _CURP;
    }
}
  