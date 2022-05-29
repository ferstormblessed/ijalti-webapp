import axios from "axios";
import Link from "next/link";
function Listar({usuarios})
{
    return(
        <div>
            <h1>Lista de usuarios: </h1>
            <div className="py-3 px-3 my-2 mx-2 rounded-lg shadow bg-gray-200 hover:bg-gray-300">
                {usuarios.map(usuarioempleado=>(
                    <Link href={`/usuarios-front/${usuarioempleado.CURP}`}key={usuarioempleado.CURP}>
                        <a>
                            <div>
                            <h1>{usuarioempleado.first_name}</h1>
                            <p>{usuarioempleado.last_name}</p>
                            <p>{usuarioempleado.sexo}</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>    
        </div>
  );
};


//---Voy a pedir los datos de mis usuarios directamente al servidor---
//Esta funcion "getServerSideProps" nos la da Next y nos sire para ejecutar logica antes de que se
//despliegue nuestra pantalla. 

export const getServerSideProps=async (context)=>{
  const{data:usuarios}=await axios.get("http://localhost:3000/api/clientes");//Endpoint
 

  return {
    props:{
      usuarios,//Esto es un arreglo de objetos , estos objetos son mis cliente
    },
  };
};

export default Listar;