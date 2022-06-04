/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const puestos = [
  { id: 1, name: "Tienda#1" },
  { id: 2, name: "Tienda#2" },
  { id: 3, name: "Tienda#3" },
  { id: 4, name: "Tienda#4" },
  { id: 5, name: "Tienda#5" },
  { id: 6, name: "Tienda#6" },
  { id: 7, name: "Tienda#7" },
  { id: 8, name: "Tienda#8" },
  { id: 9, name: "Tienda#9" },
  { id: 10, name: "Tienda#10" },
];
const modalidades = [
  { id: 1, name: "Modalidad#1" },
  { id: 2, name: "Modalidad#2" },
  { id: 3, name: "Modalidad#3" },
  { id: 4, name: "Modalidad#4" },
  { id: 5, name: "Modalidad#5" },
  { id: 6, name: "Modalidad#6" },
  { id: 7, name: "Modalidad#7" },
  { id: 8, name: "Modalidad#8" },
  { id: 9, name: "Modalidad#9" },
  { id: 10, name: "Modalidad#10" },
];
const areasConocimiento = [
  { id: 1, name: "AreaDeConocimiento#1" },
  { id: 2, name: "AreaDeConocimiento#2" },
  { id: 3, name: "AreaDeConocimiento#3" },
  { id: 4, name: "AreaDeConocimiento#4" },
  { id: 5, name: "AreaDeConocimiento#5" },
  { id: 6, name: "AreaDeConocimiento#6" },
  { id: 7, name: "AreaDeConocimiento#7" },
  { id: 8, name: "AreaDeConocimiento#8" },
  { id: 9, name: "AreaDeConocimiento#9" },
  { id: 10, name: "AreaDeConocimiento10#" },
];
const jornadas = [
  { id: 1, name: "Matutina" },
  { id: 2, name: "Vespertina" },
];
const idiomas = [
  { id: 1, name: "Idioma#1" },
  { id: 2, name: "Idioma#2" },
  { id: 3, name: "Idioma#3" },
  { id: 4, name: "Idioma#4" },
  { id: 5, name: "Idioma#5" },
  { id: 6, name: "Idioma#6" },
  { id: 7, name: "Idioma#7" },
  { id: 8, name: "Idioma#8" },
  { id: 9, name: "Idioma#9" },
  { id: 10, name: "Idioma#10" },
];
const ubicaciones = [
  { id: 1, name: "Ubicacion#1" },
  { id: 2, name: "Ubicacion#2" },
  { id: 3, name: "Ubicacion#3" },
  { id: 4, name: "Ubicacion#4" },
  { id: 5, name: "Ubicacion#5" },
  { id: 6, name: "Ubicacion#6" },
  { id: 7, name: "Ubicacion#7" },
  { id: 8, name: "Ubicacion#8" },
  { id: 9, name: "Ubicacion#9" },
  { id: 10, name: "Ubicacion#10" },
];
const tecnologias = [
  { id: 1, name: "Tecnologia#1" },
  { id: 2, name: "Tecnologia#2" },
  { id: 3, name: "Tecnologia#3" },
  { id: 4, name: "Tecnologia#4" },
  { id: 5, name: "Tecnologia#5" },
  { id: 6, name: "Tecnologia#6" },
  { id: 7, name: "Tecnologia#7" },
  { id: 8, name: "Tecnologia#8" },
  { id: 9, name: "Tecnologia#9" },
  { id: 10, name: "Tecnologia#10" },
];
const Horarios = [
  { id: 1, name: "Horario#1" },
  { id: 2, name: "Horario#2" },
  { id: 3, name: "Horario#3" },
  { id: 4, name: "Horario#4" },
  { id: 5, name: "Horario#5" },
  { id: 6, name: "Horario#6" },
  { id: 7, name: "Horario#7" },
  { id: 8, name: "Horario#8" },
  { id: 9, name: "Horario#9" },
  { id: 10, name: "Horario#10" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function InputFiltro() {
  const [puesto, setPuesto] = useState(puestos[0]);
  const [modalidad, setModalidad] = useState(modalidades[0]);

  const [jornada, setJornada] = useState(jornadas[0]);
  const [horario, setHorario] = useState(Horarios[0]);

  const [idioma, setIdioma] = useState(idiomas[0]);
  const [direccion, setDireccion] = useState(ubicaciones[0]);

  const [areaConocimiento, setAreaConocimiento] = useState(
    areasConocimiento[0]
  );

  return (
    <div>
      <Listbox value={puesto} onChange={setPuesto}>
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
      <Listbox value={jornada} onChange={setPuesto}>
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
    </div>
  );
}
