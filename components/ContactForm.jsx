import Countries from './helpers/Countries'

export default function ContactForm() {
  return (
    <div className="mt-5 md:mt-0 md:col-span-2 mx-auto">
      <form
        // action="https://formspree.io/f/xbjwpkpo" 
        method="POST" className="w-full lg:w-full mx-auto">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <h4 className="text-lg leading-6 font-medium text-secondaryColor mb-5">Formulario de contacto</h4>
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12">
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-primaryColor border py-2 pl-3 focus:border-primaryColor block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-12">
                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="mt-1 focus:ring-primaryColor border py-2 pl-3 focus:border-primaryColor  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div className="col-span-12 styled-select relative">
              <svg className='right-4 absolute top-9'  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Pais
                </label>
                <select
                  id="country"
                  name="country"
                  defaultValue='Spain'
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primaryColor pl-3 focus:border-primaryColor  sm:text-sm cursor-pointer"
                >
                  {
                    Countries().map(country => {
                      return <option key={country.name} value={country.name}>{country.name}</option>
                    })
                  }
                </select>
              </div>
              <div className="col-span-12">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefono
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-primaryColor border py-2 pl-3 focus:border-primaryColor  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div className="col-span-12 styled-select relative">
              <svg className='right-4 absolute top-9'  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  ¿Como quieres recibir tu respuesta?
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primaryColor pl-3 focus:border-primaryColor  sm:text-sm cursor-pointer"
                >
                  <option value='phone'>Llamada</option>
                  <option value='email'>Email</option>
                  <option value='whatsapp'>Whatsapp</option>
                </select>
              </div>
              <div className="col-span-12 styled-select relative">
              <svg className='right-4 absolute top-9'  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Asunto
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primaryColor pl-3 focus:border-primaryColor  sm:text-sm cursor-pointer"
                >
                  <option value='Certificados'>Certificados</option>
                  <option value='Ciudadania'>Ciudadania</option>
                  <option value='Residencia'>Residencia</option>
                  <option value='Tramites'>Tramites</option>
                  <option value='Consulta'>Consulta</option>
                  <option value='Otros'>Otros</option>
                </select>
              </div>
              <div className="col-span-12 gap-6">
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                  Consulta
                </label>
                <textarea
                  rows={10}
                  name="message"
                  id="message"
                  autoComplete="message"
                  className="mt-1 focus:ring-primaryColor border py-2 pl-3 focus:border-primaryColor  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center px-4 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryColor hover:bg-white hover:text-secondaryColor
              transition-all duration-300 hover:border-secondaryColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor border py-2 pl-3"
            >
              <strong>Contacto</strong>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
