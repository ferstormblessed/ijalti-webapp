import axios from "axios";
import { useRouter } from "next/router";
//import { getServerSideProps } from "../listarUsuarios";

function ProductView({usuario})
{
    const router=useRouter()
    const handleDelete=async(CURP)=>
        {
            //console.log(CURP);
            await axios.delete('/api/clientes/'+CURP)
            router.push("/listarUsuarios")
        };


    console.log("Usuario??",usuario);
    return(
        <div>
            <h1>{usuario.CURP}</h1>
            <h1>{usuario.nombre}</h1>
            <h1>{usuario.apellidoP}</h1>
            <h1>{usuario.apellidoM}</h1>
            <button
                onClick={()=>handleDelete(usuario.CURP)}
                type="button"
                className="mr-4 py-2 px-4 bg-red-600 text-white rounded shadow-sm hover:bg-red-500">
                Borrar Info
            </button>
        </div>
    )
}

export const getServerSideProps=async(context)=>{
    console.log("context.query.id!!!!!!!!!!!!!!!!!!!!!!!!!: ",context.query.id);
    /*Hacemos una consulta a nuestro backedn y traemos datos */
    //Hacemos una peticion  a api clientes(Nuestro backend)  
    const {data:usuario} =await axios.get('http://localhost:3000/api/clientes/'+ context.query.id)
    return{
        props:{
            usuario,
        }
    }

}
export default ProductView;