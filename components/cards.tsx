/* This example requires Tailwind CSS v2.0+ */
import { ChevronDownIcon, XIcon } from "@heroicons/react/solid";

interface ICardProps {
    name: string;
    role: string;
    info: string;
    imageUrl: string;
  }
  
export default function Card(props: ICardProps) {
  return (
    <div
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      
        <div
          key={props.name}
          className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="text-gray-900 text-sm font-medium truncate">
                  {props.name}
                </h3>
                <span className="flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {props.role}
                </span>
              </div>
              <p className="mt-1 text-gray-500 text-sm truncate">
                {props.info}
              </p>
            </div>
            <img
              className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
              src={props.imageUrl}
              alt=""
            />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="w-0 flex-1 flex">
                <a
                  className="relative transition-all duration-300 hover:bg-gray-200 hover:text-gray-700 -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg"
                >
                  <ChevronDownIcon
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Ver mas</span>
                </a>
              </div>
              <div className="-ml-px w-0 flex-1 flex">
                <a
                  className="relative w-0 transition-all duration-300 flex-1 inline-flex hover:bg-red-200 hover:text-red-500 items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg "
                >
                  <XIcon
                    className="w-5 h-5"
                    aria-hidden="true"
                  />
                  <span className="ml-3">Eliminar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}
