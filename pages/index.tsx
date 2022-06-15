//import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import LoginScreen from "../components/layouts/login";
import React, { useState } from "react";
import Link from "next/link";
import { OfficeBuildingIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut, getSession, SessionProvider } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils";
//import { Router, useRouter } from "next/router";
//import { useEffect } from "react";


//const Home: NextPage = () => {
function Home({session}:any)
{
  //console.log(session.user.name)

  return (
    <div className="grid h-screen bg-background">

      <LoginScreen />

      <Link href="loginEmpresas">
        <div className="text-center">
        <button
        className="justify-center py-2 px-1 border border-transparent text-sm font-medium rounded-md text-purple-500 bg-azulito hover:text-gray-500	 hover:bg-buttonsecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary ]">
        <div className="grid  justify-items-center">
          <OfficeBuildingIcon className="w-4 h-4"/>
        <span
        className="font-medium">
        Inicio de sesion de empresas
        </span>
          </div>

        </button>
          </div>

        </Link>

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
      products,//Esto es un arreglo de objetos , estos objetos son mis cliente
    },
  };
};
*/

export const getServerSideProps=async(context:any)=>{
  const session=await getSession(context)
  if(session)
  return{
    redirect:{
      destination:"/dashboard",
      permanent:false
    } 
  }
  return{
    props:
    {
      session
    }
  }
}



export default Home;
