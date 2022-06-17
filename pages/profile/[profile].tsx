
import axios from "axios";
import Link from "next/link";
import Cookies from "universal-cookie";
import Dashboard from "../../components/dashboard";

import { config } from "../../config/db.jsx";
//var sql = require("mssql");

//const pool = new sql.ConnectionPool(config);
//const poolConnect = pool.connect();


function ProfileUser({ usuarioPersonal, dateVisaPas }: any) {
  

  const cookies = new Cookies();
  const cookiesImage = new Cookies();
  const cookiesCV = new Cookies();

  console.log("Data de usuario", usuarioPersonal);
  console.log("Fecha: \n", dateVisaPas);

  //const pool2 = poolConnect;
  //const input = "UPDATE [dbo].[UsuarioEmpleado] Set imageData = "+"'"+cookiesImage.get("imageUri")+"'"+","+"CV="+"'"+cookiesCV.get("fileUri")+"'"+" WHERE CURP="+"'"+cookies.get("CURP")+"'";

  //console.log("Input: ",input);
  //const result = pool2
    //.request()
    //.input("input_parameter", sql.VarChar, "Nada")
    //.query(input);



  console.log("Cookies: ", cookies.get("CURP"));
  console.log("Cookies: ", cookiesImage.get("imageUri"));
  return (
    <Dashboard>
      <div className="container mx-auto my-5 p-5 h-[68vh]">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto"
                  src={cookiesImage.get("imageUri")}
                  alt=""
                />
              </div>
              {usuarioPersonal.imageData}
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1"></h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                {usuarioPersonal.tituloProfesion}
              </h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {usuarioPersonal.about}
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Vigencia de Visa:</span>
                  <span className="ml-auto">
                    <span className="truncate bg-green-500 py-1 px-2 rounded text-white text-sm">
                      {dateVisaPas.fechaUtilVisa}
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Vigencia de Pasaporte:</span>
                  <span className="ml-auto">
                    <span className="truncate bg-green-500 py-1 px-2 rounded text-white text-sm">
                      {dateVisaPas.fechaUtilPasaporte}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="my-4"></div>
            <div className="bg-white p-3 hover:shadow">
              <div className="grid grid-cols-3"></div>
            </div>
          </div>
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <span className="tracking-wide">Informacion basica</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Profesion</div>
                    <div className="px-4 py-2">
                      {usuarioPersonal.tituloProfesion}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Area de especialidad
                    </div>
                    <div className="px-4 py-2">
                      {usuarioPersonal.areaEspecialidad}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Universidad de egreso
                    </div>
                    <div className="px-4 py-2">{usuarioPersonal.UniEgreso}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Nombre</div>
                    <div className="px-4 py-2">{usuarioPersonal.nombre}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Apellido</div>
                    <div className="px-4 py-2">
                      {usuarioPersonal.apellidoP} {usuarioPersonal.apellidoM}
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Sexo</div>
                    <div className="px-4 py-2">{usuarioPersonal.sexo}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">RFC</div>
                    <div className="px-4 py-2">{usuarioPersonal.RFC}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Correo</div>
                    <div className="px-4 py-2">
                      <a
                        className="text-blue-800"
                        href="mailto:jane@example.com"
                      >
                        {usuarioPersonal.email}
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">CURP</div>
                    <div className="px-4 py-2">{usuarioPersonal.CURP}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="my-4"></div>

            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                    <span className="tracking-wide">Habilidades</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">Area de especialidad.</div>
                      <div className="text-gray-500 text-xs">
                        {usuarioPersonal.areaEspecialidad}
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        Tecnología con experiencia.
                      </div>
                      <div className="text-gray-500 text-xs">
                        {usuarioPersonal.nombreLenguaje}
                        {"   |      Nivel: "}
                        {usuarioPersonal.aniosDePractica}
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                    </span>
                    <span className="tracking-wide">Curriculum</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600 grid ">
                        <img
                        src={cookiesCV.get("fileUri")}/>
                        <span>{usuarioPersonal.nombre} {usuarioPersonal.apellidoP} CV </span>

                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export const getServerSideProps = async (context: any) => {
  console.log("context.query.id(Componente): ", context.query.profile);
  const { data: dateVisaPas } = await axios.get(
    "http://localhost:3000/api/clientes/" + context.query.profile + "?tipo=date"
  );
  const { data: usuarioPersonal } = await axios.get(
    "http://localhost:3000/api/clientes/" +
      context.query.profile +
      "?tipo=general"
  );

  return {
    props: {
      dateVisaPas,
      usuarioPersonal, //Esto es un arreglo de objetos , estos objetos son mis cliente
    },
  };
};

export default ProfileUser;
