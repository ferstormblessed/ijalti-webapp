export class claseUsuario {
    /*
    <---------- Constructor con parametros ---------->
    */ 
    constructor(nombre='', CURP='', email='', imagen='') {
        this.nombre = nombre;
        this.CURP = CURP;
        this.email = email;
        this.imagen = imagen;
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

    getEmail(){
        return this.email;
    }

    getImagen(){
        return this.imagen;
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

    setEmail(_email){
        this.email = _email;
    }

    setImagen(_imagen){
        this.imagen = _imagen;
    }
}
  