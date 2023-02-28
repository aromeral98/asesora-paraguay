import ContactForm from '../components/ContactForm'

export default function ResidencyContent() {
    return (
        <section className="py-8 xl:py-16 max-w-7xl mx-auto px-5 bg-white">
            <div className="grid xl:grid-cols-3 sm:gap-16">
                <div className="xl:col-span-2 lg:px-8 px-4 ">
                    <h2 className="text-secondaryColor text-xl lg:text-4xl font-medium lg:leading-snug">
                        ¿Requisitos para la residencia?
                    </h2>
                    <ul>
                        <li>Documento de Identidad, Pasaporte o Cedula de Identidad de su país de origen vigente.</li>
                        <li>Certificado de Nacimiento, Matrimonio o Sentencia de divorcio para justificar el estado civil.</li>
                        <li>Certificado de Antecedentes Penales o Policiales(desde los 14 años de edad) de su país de origen o de residencia de los últimos 5 años vigente.</li>
                        <li>Certificado de Antecedentes, para extranjeros expedido por el Departamento de Informática de la Policía Nacional (Boggiani y RI2 Ytororo) desde los 14 años de edad.</li>
                        <li>Certificado Sanitario, expedidos por médicos habilitados y visado por el Ministerio de Salud, haciendo mención a la salud psicofísica y sobre no poseer enfermedades infectocontagiosas.</li>
                        <li>Certificado de vida y Residencia expedido por la Comisaria Policial jurisdiccional o Juzgado de Paz, (vigente).</li>
                        <li>Constancia de su ingreso y permanencia en el país. Visa Consular, para los países que requieren de la misma (verificado por el Ministerio de Relaciones Exteriores; 14 de mayo y palma).</li>
                        <li>Dos Fotos tipo carnet (2.5 X 2.5) a color.</li>
                    </ul>
                    <div className="prose max-w-max mt-6">
                        <div className='my-6'>
                            <details open><summary className='cursor-pointer'><strong>Residencia temporaria :</strong></summary>
                                <p className='pl-2 lg:pl-2 lg:pl-8'>
                                    Promesa de Empleo mencionando el salario a percibir con Certificación de Firma ante Escribano Publico,
                                    Patente comercial RUC y Cedula de Identidad del Empleador y Título Profesional a nivel Técnico(legalizado)
                                    o Certificado de Estudio(legalizado) y constancia de mantención (p/mayores de edad)
                                </p>
                            </details>
                        </div>
                        <div className='my-6'>
                            <details open><summary className='cursor-pointer'><strong>Residencia permanente :</strong></summary>
                                <p className='pl-2 lg:pl-2 lg:pl-8'>
                                Constancia de Solvencia económica: (5.000 dólares o equivalente) en depósito bancario, financiero o Cooperativa, o 
                                Título Profesional a nivel Universitario con promesa de trabajo, mencionando el salario a percibir con Certificación de 
                                Firma ante Escribano Público, Patente comercial y RUC del empleador o título de propiedad destinado a la 
                                producción con un mínimo de 10 hectáreas o escritura de Constitución de Sociedad, 
                                mencionando el aporte del cual debe ser como mínimo 5.000 dólares o su equivalente.
                                </p>
                                <p className='pl-2 lg:pl-2 lg:pl-8'>
                                Declaración jurada de acatar las Leyes (Art. 23, de la Ley 978/96), ante Escribano Público.
                                </p>
                                <p className='pl-2 lg:pl-2 lg:pl-8'>
                                Observación: Todos los documentos se presentan con originales vigentes y dos fotocopias autenticadas por Escribano Público en hojas enteras cada una. Los documentos que estén en idioma extranjero, incluyendo el pasaporte (excepto el portugués), deberán ser traducidos al idioma español, por Traductor Público matriculado por la Corte Suprema de Justicia. Los documentos del país de origen o de residencia deberán estar visados por el Consulado Paraguayo en el extranjero y legalizados por el Ministerio de Relaciones Exteriores del Paraguay (14 de Mayo y Palma - Asunción).Los presentes requisitos podrán sufrir modificaciones dentro del marco legal. Declaración Jurada del Cumplimiento de la Constitución Nacional y las Leyes Nacionales mencionada en el artículo 23 de la Ley 978/96 De Migraciones.
                                </p>
                            </details>
                        </div>
                    </div>
                </div>
                <div className='relative block w-full'>
                    <div className='flex flex-col sticky top-8'>
                        <div className='h-full w-full relative'>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
