import axios from "axios";
const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};
import { useState } from "react";
import {
  useSession,
  signIn,
  signOut,
  getSession,
  SessionProvider,
} from "next-auth/react";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import UploadingImage from "./uploadingImage";
import UploadingFile from "./uploadingFile";
import Cookies from 'universal-cookie';

function UserForm() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status !== "loading" && status === "authenticated") {
    console.log(session?.user?.email);
  }
  /*
  if(status==="unauthenticated")
  {
    console.log("No hay usuario")
    router.push("/")
  }
  */

  /*Este es el estado inicila , todo los valores se setean a cero
    y desde la funcion "handleChange se pasan los valores a este objeto"*/
  /*
  const[direccion,setDireccion]=useState({
  pais:"",
  ciudad:"",
  estado:"",
  calle:"",
  cp:"",
  numExterior:0
})
*/
  const cookiesImage = new Cookies();
  const cookiesCV = new Cookies();
  const [imageUri, setImageUri] = useState("");
  cookiesImage.set("imageUri",imageUri,{path: "/"});
  
  const [usuarioempleado, setUsuarioempleado] = useState({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    email: "",
    password: "",
    CV: "Mi cv",
    sexo: 0,
    estadoCivil: "",
    CURP: "",
    RFC: "",
    visaVigente: "",
    pasaporteVigente: "",
    pais: "",
    ciudad: "",
    estado: "",
    calle: "",
    cp: "",
    numExterior: 0,
    about: "",
  });

  const [lenguajeprogramacion, setLenguajeprogramacion] = useState({
    nombreLenguaje: "",
    aniosDePractica: "",
    CURP: usuarioempleado.CURP,
  });

  const [infoacademica, setinfoacademica] = useState({
    tituloProfesion: "",
    areaEspecialidad: "",
    Uniegreso: "",
    CURP: usuarioempleado.CURP,
  });
  const [fileUri, setFileUri] = useState("");
  cookiesCV.set("fileUri",fileUri,{path: "/"});


  //console.log(fileUri);
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    //const resDireccion= await axios.post("/api/clientes?tipo=direccion",direccion);
    const res = await axios.post("/api/clientes?tipo=usuario", usuarioempleado);
    const resLenguaje = await axios.post(
      "/api/clientes?tipo=lenguaje",
      lenguajeprogramacion
    );
    const resInfoAcademica = await axios.post(
      "/api/clientes?tipo=info",
      infoacademica
    );
    //<Link href="/"></Link>
    router.push("/");
    const Curp2 = res.data.CURP;
    console.log(Curp2);
    console.log(res);
  };

  /*Esta funcion va a recibir informacion del input que se está typeando
    y desde ese inuput extraemos el e.target.name y el e.target.value*/

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: any; value: any };
  }) => {
    //setDireccion({...direccion,[name]:value});
    setUsuarioempleado({ ...usuarioempleado, [name]: value });
    setLenguajeprogramacion({ ...lenguajeprogramacion, [name]: value });
    setinfoacademica({ ...infoacademica, [name]: value });
  };

  /*
    const handleChange=({target:{name,value}}:{target:{name:any,value:any}})=>{
        setLenguajeprogramacion({...lenguajeprogramacion,[name]:value});
        
    }

    const handleChange=({target:{name,value}}:{target:{name:any,value:any}})=>{
      setinfoacademica({...infoacademica,[name]:value});
      
  }
  */
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 divide-y divide-gray-200"
    >
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/javascript-canvas-to-blob/3.4.0/js/canvas-to-blob.min.js"></script> */}
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-primary">
              Registro personal
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-secondary">
              Esta información sera compartida con el contratista e IJALTI
            </p>
          </div>

          <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Nombre
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  autoComplete="given-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Apellido Paterno
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="apellidoP"
                  id="apellidoP"
                  autoComplete="family-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Apellido Materno
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="apellidoM"
                  id="apellidoM"
                  autoComplete="family-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Sexo
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="sexo"
                  name="sexo"
                  autoComplete="country-name"
                  className="text-primary bg-buttonsecondary max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                >
                  <option>Elegir</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                  <option>Prefiero no especificar</option>
                </select>
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
                htmlFor="email"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Contraseña
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                  className="block bg-buttonsecondary max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="pastexperience"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                CURP
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="CURP"
                  id="CURP"
                  autoComplete="given-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="pastexperience"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                RFC
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="RFC"
                  id="RFC"
                  autoComplete="given-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Estado civil
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="estadoCivil"
                  name="estadoCivil"
                  autoComplete="estadoCivil"
                  className="text-primary bg-buttonsecondary max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                >
                  <option>Elegir</option>
                  <option>Solterx</option>
                  <option>Casadx</option>
                  <option>Viudx</option>
                  <option>Otro</option>
                  <option>Prefiero no especificar</option>
                </select>
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
                htmlFor="region"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Calle
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="calle"
                  id="calle"
                  autoComplete="address-level1"
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

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Numero Exterior
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="numExterior"
                  id="numExterior"
                  autoComplete="postal-code"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-primary">
              Información laboral
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-secondary">
              Con esta información sera compartida con la empresa a la que
              desees aplicar
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="profesion"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Profesión
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="tituloProfesion"
                  id="tituloProfesion"
                  autoComplete="given-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="especiality"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Área de especialidad
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="areaEspecialidad"
                  id="areaEspecialidad"
                  autoComplete="given-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="especiality"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Universidad de egreso
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="Uniegreso"
                  id="Uniegreso"
                  autoComplete="given-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="pastexperience"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Tecnologia con experiencia
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="nombreLenguaje"
                  id="nombreLenguaje"
                  autoComplete="given-name"
                  className="max-w-lg bg-buttonsecondary block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Nivel de experiencia
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <select
                  id="aniosDePractica"
                  name="aniosDePractica"
                  autoComplete="country-name"
                  className="text-primary bg-buttonsecondary max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                  onChange={handleChange}
                >
                  <option>Principiante</option>
                  <option>Intermedio</option>
                  <option>Experto</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <div className="">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
                >
                  Curriculum
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex justify-center bg-buttonsecondary px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-primary hover:text-secondary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <UploadingFile setFileUri={setFileUri} />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start pt-5 min-w-0">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                Foto de perfil
              </label>
              <div className="mt-6 lg:mt-0 lg:ml-6 grow-0">
                <p
                  className="text-sm font-medium text-gray-700"
                  aria-hidden="true"
                >
                  Photo
                </p>
                {/* cambio */}
                <div className="hidden relative rounded-full lg:block grow-0  ">
                  {imageUri ? (
                    <img
                      className="relative rounded-full w-40 h-40 object-cover"
                      src={imageUri}
                      alt=""
                    />
                  ) : (
                    <img
                      className="relative rounded-full w-40 h-40 object-cover"
                      src={user.imageUrl}
                      alt=""
                    />
                  )}
                  <label
                    htmlFor="desktop-user-photo"
                    className="absolute inset-0 w-40 h-40 rounded-full bg-black bg-opacity-75 flex items-center justify-center text-sm font-medium text-white opacity-0 hover:opacity-100 focus-within:opacity-100"
                  >
                    <UploadingImage setImageUri={setImageUri} />
                    <span className="sr-only"> user photo</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="about"
                className="block text-sm font-medium text-primary sm:mt-px sm:pt-2"
              >
                About
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="max-w-lg bg-buttonsecondary shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  defaultValue={""}
                  onChange={handleChange}
                />
                <p className="mt-2 text-sm text-primary">
                  Cuentanos un poco sobre tu experiencia en otros trabajos o tus
                  proyectos
                </p>
              </div>
            </div>

            <div className="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-notifications">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <div
                      className="text-base font-medium text-gray-900 sm:text-sm sm:text-primary"
                      id="label-notifications"
                    >
                      Visa vigente
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="max-w-lg">
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="visaVigente"
                            name="visaVigente"
                            type="date"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="visa"
                            className="ml-3 block text-sm font-medium text-primary"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div role="group" aria-labelledby="label-notifications">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
                  <div>
                    <div
                      className="text-base font-medium text-gray-900 sm:text-sm sm:text-primary"
                      id="label-notifications"
                    >
                      Pasaporte vigente
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="max-w-lg">
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="pasaporteVigente"
                            name="pasaporteVigente"
                            type="date"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                            onChange={handleChange}
                          />
                          <label
                            htmlFor="visa"
                            className="ml-3 block text-sm font-medium text-primary"
                          ></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <button
            onClick={() => signOut()}
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
      <div></div>
    </form>
  );
}

export default UserForm;
