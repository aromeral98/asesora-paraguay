import { Disclosure, Transition } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useRouter } from 'next/router'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const routes = [
  {title: 'Inicio', path: '/'},
  {title: 'Freelancers', path: '/freelance'},
  {title: 'Certificados', path: '/certificates'},
  {title: 'Ciudadania', path: '/citizenship'},
  {title: 'Residencia', path: '/residency'},
  {title: 'Tramites en Paraguay', path: '/procedures'},
  {title: 'Contacto', path: '/contact'},
]
export default function Navbar() {
  const router = useRouter()
  return (
    <Disclosure as="nav" className="bg-primaryColor shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className='lg:hidden absolute left-0 h-full p-4 bg-white rounded-full'>
              <Link href={'/'}>
              <img alt='brand' className='h-full' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Flag_of_Paraguay_%28reverse%29.svg/250px-Flag_of_Paraguay_%28reverse%29.svg.png'></img>
              </Link>
              </div>
              <div className="absolute inset-y-0 right-0  flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center border-2 focus:border-2 border-white justify-center p-2 rounded-md text-white hover:text-gray-500 hover:bg-gray-100 transition-all duration-300">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="hidden lg:flex sm:space-x-8">
                  {routes.map(route => {
                    return <Link
                    key={route.title}
                    href={route.path}
                    
                  >
                    <button className={((router.route === route.path) ? 'border-white text-white' : 'border-transparent text-white hover:text-gray-200 hover:border-white') + "   inline-flex items-center px-1 pt-1 border-b-2 font-medium transition-all duration-300"}>
                      {route.title}
                    </button>
                  </Link>
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
          <Disclosure.Panel className="lg:hidden">
            <div className="">
              {routes.map(route => {
                    return <Link
                    key={route.title}
                    href={route.path}
                  >
                    <button className={((router.route === route.path) ? 'bg-indigo-50 border-secondaryColor text-secondaryColor ' : 'border-transparent text-white hover:bg-gray-50 hover:border-secondaryColor hover:text-gray-700') + " block pl-3 pr-4 py-2.5 border-l-4 text-base font-medium w-full text-left"}>
                    {route.title}
                    </button>
                  </Link>
                  })
                  }
            </div>
          </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
