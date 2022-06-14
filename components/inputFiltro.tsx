/* This example requires Tailwind CSS v2.0+ */
import axios from "axios";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon, LocationMarkerIcon, UsersIcon, ClockIcon } from "@heroicons/react/solid";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import {clasePuesto} from "./clasePuesto";

const areasConocimiento = [
  { id: 1, name: "Puesto"},
  { id: 2, name: "Design" },
  { id: 3, name: "Engineering" },
  { id: 4, name: "Marketing" },
  { id: 5, name: "Cyber Seguridad" },
];
const modalidades = [
  { id: 1, name: "Modalidad" },
  { id: 2, name: "Remoto" },
  { id: 3, name: "Presencial" },
];
const puestos = [
  { id: 1, name: "Area de conocimiento" },
  { id: 2, name: "Back End Developer" },
  { id: 3, name: "Front End Developer" },
  { id: 4, name: "User Interface Designer" },
  { id: 5, name: "Database Developer" },
  { id: 6, name: "Project Manager" }
];
const jornadas = [
  { id: 1, name: "Jornada" },
  { id: 2, name: "Matutina" },
  { id: 3, name: "Vespertina" },
];
const idiomas = [
  { id: 1, name: "Idioma" },
  { id: 2, name: "Español" },
  { id: 3, name: "English" },
  { id: 4, name: "Deutsch" },
  { id: 5, name: "Italiano" },
  { id: 6, name: "Français" },
];

const Horarios = [
  { id: 1, name: "Horario" },
  { id: 2, name: "Fijo" },
  { id: 3, name: "Flexible" },
];

const positions = [
  {
    id:0 ,
    title: '',        // puesto
    type: '',                       // horario
    location: '',                 // modalidad
    department: '',          // Area de conocimiento                  
    jornada: '',                // jornada
    idioma: ''                    // idioma
  },
]

const prueba = [];

//J
//const positionsClass=new clasePuesto(1, "ITC", "Matutino", "Remoto", "Tugfa", "100", "Puras mamadas")


function classNames(...classes: any) {
  return positions.filter(Boolean).join(" ");
}

function InputFiltro(postTrabajos:any) {
  
  const positionsClass = new clasePuesto();
  
  const router = useRouter();

  const [puesto, setPuesto] = useState(puestos[0]);
  const [modalidad, setModalidad] = useState(modalidades[0]);
  const [jornada, setJornada] = useState(jornadas[0]);
  const [horario, setHorario] = useState(Horarios[0]);
  const [idioma, setIdioma] = useState(idiomas[0]);
  const [areaConocimiento, setAreaConocimiento] = useState(areasConocimiento[0]);
  
  const filtros = [puesto.name, modalidad.name, jornada.name, horario.name, idioma.name, areaConocimiento.name];


  const handleSubmit = async(e:any) => {
    e.preventDefault();
    console.log("Antes del post: ");
    
    const res = await axios.post("/api/clientes/buscarEmpleo", filtros);

    console.log("Res: ",res);
    console.log("Handle submit");
    
    positionsClass.setIDPuesto(res.data.idPuesto);
    positionsClass.setNombrePuesto(res.data.nombrePuesto);
    positionsClass.setTipoHorario(res.data.tipoHorario);
    positionsClass.setModalidadTrabajo(res.data.maodalidadTrabajo);
    positionsClass.setAreaConocimiento(res.data.areaConocimiento);
    positionsClass.setJornadaTrabajo(res.data.jornadaDeTrabajo);

    console.log("positionsClass", positionsClass.getTipoHorario());
    //router.push("/");
    //console.log(puesto);
    
  };


  return (
    <div className="grid lg:flex">
      <div className="lg:w-1/2 p-2 relative">
        <form onSubmit={handleSubmit}>
          <Listbox value={puesto} onChange={setPuesto} >
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Puesto
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{puesto.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {puestos.map((puesto) => (
                        <Listbox.Option
                          key={puesto.id}
                          className={({ active }) =>
                            classNames(
                              active ? "text-white bg-indigo-600" : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={puesto}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {puesto.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <Listbox value={modalidad} onChange={setModalidad}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Modalidad
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{modalidad.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {modalidades.map((modalidad) => (
                        <Listbox.Option
                          key={modalidad.id}
                          className={({ active }) =>
                            classNames(
                              active ? "text-white bg-indigo-600" : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={modalidad}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {modalidad.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <Listbox value={horario} onChange={setHorario}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Horarios
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{horario.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {Horarios.map((horario) => (
                        <Listbox.Option
                          key={horario.id}
                          className={({ active }) =>
                            classNames(
                              active ? "text-white bg-indigo-600" : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={horario}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {horario.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <Listbox value={jornada} onChange={setJornada}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Jornada de trabajo
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{jornada.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {jornadas.map((jornada) => (
                        <Listbox.Option
                          key={jornada.id}
                          className={({ active }) =>
                            classNames(
                              active ? "text-white bg-indigo-600" : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={jornada}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {jornada.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <Listbox value={areaConocimiento} onChange={setAreaConocimiento}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Área de Conocimiento
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{areaConocimiento.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {areasConocimiento.map((areaConocimiento) => (
                        <Listbox.Option
                          key={areaConocimiento.id}
                          className={({ active }) =>
                            classNames(
                              active ? "text-white bg-indigo-600" : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={areaConocimiento}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {areaConocimiento.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <Listbox value={idioma} onChange={setIdioma}>
            {({ open }) => (
              <>
                <Listbox.Label className="block text-sm font-medium text-gray-700">
                  Idiomas
                </Listbox.Label>
                <div className="mt-1 relative">
                  <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <span className="block truncate">{idioma.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {idiomas.map((idioma) => (
                        <Listbox.Option
                          key={idioma.id}
                          className={({ active }) =>
                            classNames(
                              active ? "text-white bg-indigo-600" : "text-gray-900",
                              "cursor-default select-none relative py-2 pl-3 pr-9"
                            )
                          }
                          value={idioma}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {idioma.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
          <button
              type="submit"
              className="absolute bottom-2 right-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
            Buscar
          </button>
        </form>
      </div>


    {/*Despliegue de ofertas*/}
      <div className="lg:w-1/2 p-2">

        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
              <li key={positionsClass.getIDPuesto()}>
                <a href="#" className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate">{positionsClass.getNombrePuesto()}</p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                          {positionsClass.getTipoHorario()}
                        </p>
                        {/* <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${positionsClass.getIdioma() ==="Français" && 'bg-blue-100 text-blue-800'} ${positionsClass.idioma ==="Italiano" && 'bg-green-100 text-green-800'} ${positionsClass.idioma ==="Español" && 'bg-yellow-100 text-yellow-800'} ${positionsClass.idioma ==="English" && 'bg-purple-100 text-purple-800'} ${positionsClass.idioma ==="Deutsch" && 'bg-red-100 text-red-800'}`}>
                          {positionsClass.getIdioma()}
                        </p> */}
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          <UsersIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          {positionsClass.getAreaConocimiento()}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <LocationMarkerIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          {positionsClass.getModalidadTrabajo()}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <ClockIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                          {positionsClass.getJornadaTrabajo()}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
          </ul>
        </div>
        {/* <JobOffers /> */}
      </div>
    </div>
    
  );
}
/*
export const getServerSideProps = async(context: any) => {
  //console.log("context.query.id(Componente): ",context.query.profile);
  const {data:postTrabajos} = await axios.get('http://localhost:3000/api/clientes/buscarEmpleo')
 
  return {
    props:{
      postTrabajos,//Esto es un arreglo de objetos, post de trabajos
    }
  }
}
*/

export default InputFiltro