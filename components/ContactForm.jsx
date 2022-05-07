import Countries from './helpers/Countries'

export default function ContactForm() {
    return (
    <div className="mt-5 md:mt-0 md:col-span-2 mx-auto">
      <form 
      // action="https://formspree.io/f/xbjwpkpo" 
      method="POST" className="w-full lg:w-full mx-auto py-4 md:py-16">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-5">Formulario de contacto</h3>
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

              <div className="col-span-12">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  Pais
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primaryColor pl-3 focus:border-primaryColor  sm:text-sm"
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
              <div className="col-span-12">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                  ¿Como quieres recibir tu respuesta?
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primaryColor pl-3 focus:border-primaryColor  sm:text-sm"
                >
                         <option value='phone'>Llamada</option>
                         <option value='email'>Email</option>
                         <option value='whatsapp'>Whatsapp</option>
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
              className="inline-flex justify-center px-4 border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primaryColor hover:bg-white hover:text-primaryColor
              transition-all duration-300 hover:border-primaryColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor border py-2 pl-3"
            >
              Contacto
            </button>
          </div>
        </div>
      </form>
      </div>
    )
  }
  