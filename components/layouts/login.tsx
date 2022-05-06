/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { LockClosedIcon } from "@heroicons/react/solid";
import Logo from "./IJALTI.png"
export default function LoginScreen() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-auto w-auto"
              src="IJALTI.png"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-primary">
              Ingresa a tu cuenta
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{" "}
              <a
                href="www.google.com"
                className="font-medium text-secondary hover:text-primary"
              >
                registrate
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px ">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="bg-buttonsecondary rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-primary rounded-t-md focus:outline-none focus:ring-secondary500 focus:border-secondary focus:z-10 sm:text-sm"
                  placeholder="Correo electronico"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="bg-buttonsecondary appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-primary rounded-b-md focus:outline-none focus:ring-secondary500 focus:border-secondary focus:z-10 sm:text-sm"
                  placeholder="Contraseña"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-secondary border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="text-primary ml-2 block text-sm "
                >
                  Recuerdame
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-secondary hover:text-primary"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-buttonprimary hover:bg-buttonsecondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-buttonsecondary group-hover:text-buttonprimary"
                    aria-hidden="true"
                  />
                </span>
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
