import { Disclosure, Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/img/logo.PNG'
import { NavbarIcon } from './NavbarIcon'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const routes = [
  { title: 'Inicio', path: '/' },
  { title: 'Freelancers', path: '/freelance' },
  // { title: 'Certificados', path: '/certificates' },
  // { title: 'Ciudadania', path: '/citizenship' },
  { title: 'Residencia', path: '/residency' },
  // { title: 'Tramites en Paraguay', path: '/procedures' },
  { title: 'Contacto', path: '/contact' },
]
export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-primaryColor shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
            <div className='absolute left-0 h-full p-4 bg-white rounded-full cursor-pointer'>
                <Link passHref href={'/'}>
                  <div>
                    <Image width={58} height={32} alt='brand' className='h-full' src={logo} />
                  </div>
                </Link>
              </div>
              <div className="absolute right-0 top-1.5 flex items-center h-12 lg:hidden">
                {/* Mobile menu button */}
                <div className='relative h-12 w-12 my-4'>
                  <Disclosure.Button aria-label='navbar-button'>
                    <NavbarIcon />
                  </Disclosure.Button>
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="hidden lg:flex sm:space-x-8">
                  {routes.map(route => {
                    return <Link
                      passHref
                      key={route.title}
                      href={route.path}

                    >
                      <button className={((typeof window !== 'undefined' && window.location.pathname === route.path) ? 'border-white text-white' : 'border-transparent text-white hover:text-gray-300 hover:border-white') + "   inline-flex items-center px-1 pt-1 border-b-2 font-medium transition-all duration-300"}>
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
                    passHref
                    key={route.title}
                    href={route.path}
                  >
                    <button className={((typeof window !== 'undefined' && window.location.pathname === route.path) ? 'bg-indigo-50 border-secondaryColor text-secondaryColor ' : 'border-transparent text-white hover:bg-gray-50 hover:border-secondaryColor hover:text-gray-700') + " block pl-3 pr-4 py-2.5 border-l-4 text-base font-medium w-full text-left"}>
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
