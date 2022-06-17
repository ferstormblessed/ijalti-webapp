import axios from "axios";
import { useState } from "react";
import { useSession, signIn, signOut, getSession, SessionProvider } from "next-auth/react"
import { Router, useRouter } from "next/router";


export default function CorpForm() {
  
const router=useRouter()
      /*Este es el estado inicila , todo los valores se setean a cero
    y desde la funcion "handleChange se pasan los valores a este objeto"*/ 

  const[usuarioempresa,setUsuarioempresa]=useState({
    idUsuarioEmpresa:"",
    email:"",
    razonSocial:"",
    passworUserdEmpresa:"",
    pais: "",
    ciudad: "",
    estado: "",
    cp:0
  })

  const handleSubmit= async (e:any) =>{

            e.preventDefault();
            const resusuarioempresa= await axios.post("/api/clientes?tipo=usuarioEmpresa",usuarioempresa);
            console.log("Subo usuarioempresa: ",resusuarioempresa);
            router.push("/loginEmpresas")

  };

  /*Esta funcion va a recibir informacion del input que se está typeando
    y desde ese inuput extraemos el e.target.name y el e.target.value*/
    const handleChange=({target:{name,value}}:{target:{name:any,value:any}})=>{
        setUsuarioempresa({...usuarioempresa,[name]:value});
    }



  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-primary">
              Registro Empresarial
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-secondary">
              Esta información sera compartida con el contratista e IJALTI{" "}
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                CURP
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="idUsuarioEmpresa"
                  id="idUsuarioEmpresa"
                  autoComplete="given-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={handleChange}/>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Correo
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block bg-buttonsecondary max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>
          
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Razón Social
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="razonSocial"
                  id="razonSocial"
                  autoComplete="family-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                onChange={handleChange}/>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Pais
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="pais"
                  name="pais"
                  autoComplete="country-name"
                  className="text-primary bg-buttonsecondary max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                >
                  <option>Mexico</option>
                  <option>United States</option>
                  <option>Canada</option>
                </select>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Ciudad
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="ciudad"
                  id="ciudad"
                  autoComplete="street-address"
                  className="block bg-buttonsecondary max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Estado
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="estado"
                  id="estado"
                  autoComplete="address-level2"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Codigo Postal
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="cp"
                  id="cp"
                  autoComplete="postal-code"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>


          </div>
        </div>

        <div className="">
          <div className="">
            <div className="">
            </div>
            <div className="pt-6 sm:pt-5">

              <div role="group" aria-labelledby="label-notifications">
                
              </div>
          </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-buttonsecondary py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-buttonprimary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-buttonsecondary bg-buttonprimary hover:bg-buttonsecondary hover:text-buttonprimary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Registrarse
          </button>
        </div>
      </div>
    </form>
  );
}
