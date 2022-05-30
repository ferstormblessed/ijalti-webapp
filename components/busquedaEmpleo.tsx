import InputFiltro from "./inputFiltro";
import JobOffers from "./jobOffers";
export default function BusquedaEmpleo() {
    return (
      <div className="grid lg:flex">
          <div className="lg:w-1/2 p-2">
            <InputFiltro/>
          </div>
          <div className="lg:w-1/2 p-2">
          <JobOffers/>
          </div>
      </div>
    );
  }
  