import Link from "next/link"
import { useState } from "react";
import { useRouter } from "next/router";
import { claseUsuario } from "./claseUsuario";
import axios from "axios";

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    department: "Optimization",
    email: "lindsay.walton@example.com",
    role: "Member",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

const emptyFilters = [
  {nombre: ""},
  {CURP: ""},
  {posicion: ""}
];


let posts: claseUsuario[] = [];

function emptyPosts() {
  posts = [];
}


export default function SecondInputUser() {
  const [postEmpleo, setPost] = useState([posts]);

  const router = useRouter();

  const [filters, setFilters] = useState({
    nombre: "",
    CURP: "",
  })

  const handleChange = ({target: { name, value },}: {target: { name: any; value: any };}) => {
    setFilters({...filters, [name]: value })
  };

  // const filtros = [
  //   nombre,
  //   CURP,
  //   posicion
  // ];


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Antes del post: ");

    const res = await axios.post("/api/clientes/buscarUsuario", filters);

    console.log("Res: ", res);
    console.log("Handle submit");
    console.log("Res.data", res.data);

    console.log("CURP del data: \n", res.data.size)
    
    for (let i = 0; i < res.data.length; i++) {
      let usuario = new claseUsuario();

      usuario.setNombre(res.data[i].nombre);
      usuario.setCURP(res.data[i].CURP);

      usuario.setEmail(res.data[i].email);

      

      posts.push(usuario);
      setPost([...postEmpleo, posts]);
    }

    console.log("usuarios: ", posts);
    //router.push("/");
    //console.log(puesto);
  };

    return (
      <div className="isolate -space-y-px rounded-md shadow-sm">
        <form onSubmit={handleSubmit}>
          <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="name" className="block text-xs font-medium text-gray-900">
              Nombre
            </label>
            <div>
              <input
                type="text"
                name="nombre"
                id="nombre"
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Nombre"
                value={filters.nombre}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="relative border border-gray-300 rounded-md rounded-b-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="name" className="block text-xs font-medium text-gray-900">
              Posicion
            </label>
            <div>
              <input
                type="text"
                name="job-title"
                id="job-title"
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Software Developer"
                // onChange={handleChange}
              />
            </div>
          </div>
          <div className="relative border border-gray-300 rounded-md rounded-t-none px-3 py-2 focus-within:z-10 focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600">
            <label htmlFor="job-title" className="block text-xs font-medium text-gray-900">
              CURP
            </label>
            <div>
              <input
                type="text"
                name="CURP"
                id="CURP"
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="SASO750909HDFNNS05"
                value={filters.CURP}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            type="submit"
            onClick={emptyPosts}
            className="absolute bottom-2 right-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Buscar
          </button>
        </form>

        <div className="px-4 sm:px-6 lg:px-8">

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {posts.map((person) => (
                        <tr key={person.email}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="flex items-center">
                              <div className="h-10 w-10 flex-shrink-0">
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={person.getImagen()}
                                  alt=""
                                />
                              </div>
                              <div className="ml-4">
                                <div className="font-medium text-gray-900">
                                  {person.getNombre()}
                                </div>
                                <div className="text-gray-500">{person.getEmail()}</div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="text-gray-900">{"NO TENEMOS ESO EN LA BASE DE DATOS DE EMPLEADO"}</div>
                            <div className="text-gray-500">{"NO TENEMOS ESO EN LA BASE DE DATOS DE EMPLEADO"}</div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Active
                            </span>
                          </td>

                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <Link href={"/profile/"+person.getCURP()}>
                              <a className="text-indigo-600 hover:text-indigo-900">
                                Ir a perfil
                                <span className="sr-only">, {person.getNombre()}</span>
                              </a>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
  