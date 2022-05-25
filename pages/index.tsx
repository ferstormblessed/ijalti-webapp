import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LoginScreen from "../components/layouts/login";

const Home: NextPage = () => {
  return (
    <div className="grid h-screen bg-background">
      <LoginScreen />


    {/*Listar lo que tienes en tu base de datos*/}
      {/*Con ayuda de map , voy a recorrer todo el arreglo de productos 
      y para cada producto que tenga voy a hacer un h1 y voy a desplegar
      sus atributos en pantalla del front end */}
      {/*
      {products.map(product=>(
        <div key={products.id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}

      */}

    </div>
  );
};

/*
//---Voy a pedir los datos de mis usuarios directamente al servidor---
//Esta funcion "getServerSideProps" nos la da Next y nos sire para ejecutar logica antes de que se
//despliegue nuestra pantalla. 

export const getServerSideProps=async (context)=>{
  const{data:clientes}=await axios.get("http://localhost:3000/api/clientes");

  return {
    props:{
      clientes,//Esto es un arreglo de objetos , estos objetos son mis cliente
    },
  };
};


*/
export default Home;
