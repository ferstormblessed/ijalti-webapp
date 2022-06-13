import axios from "axios";
import InputFiltro from "./inputFiltro";
import JobOffers from "./jobOffers";

export default function BusquedaEmpleo(postTrabajos: any) {


  return (
    <div className="grid lg:flex">
      <div className="lg:w-1/2 p-2 relative">
        <InputFiltro />
        {/* <button
          type="submit"
          className="absolute bottom-2 right-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          //onClick={getServerSideProps}
        >
          Buscar
        </button> */}
      </div>
      <div className="lg:w-1/2 p-2">
        <JobOffers />
      </div>
    </div>
  );
}

