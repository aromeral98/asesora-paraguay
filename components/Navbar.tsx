import { Disclosure, Transition } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const routes = [
  {title: 'Inicio', path: '/'},
  {title: 'Certificados', path: '/ce'},
  {title: 'Ciudadania', path: '/ci'},
  {title: 'Consulado', path: '/e'},
  {title: 'Extranjeria', path: '/c'},
  {title: 'Tramites en Paraguay', path: '/t'},
  {title: 'Contacto', path: '/contact'},
]
export default function Navbar() {
  const router = useRouter()
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 right-0  flex items-center sm:hidden">
                {/* Mobile menu button */}
                
                <Disclosure.Button className="inline-flex items-center border-2 focus:border-2 border-primaryColor justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <a className='invisible'></a>
                  {routes.map(route => {
                    return <a
                    href={route.path}
                    className={((router.route === route.path) ? 'border-secondaryColor text-gray-900' : 'border-transparent text-gray-500') + "  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"}
                  >
                    {route.title}
                  </a>
                  })

                  }
                </div>
              </div>
            </div>
          </div>
          <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-secondaryColor text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="/"
                className="bg-indigo-50 border-secondaryColor text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Inicio
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Requisitos para obtener residencia
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Obtener Residencia
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact"
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Contacto
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
