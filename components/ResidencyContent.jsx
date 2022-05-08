import ContactForm from '../components/ContactForm'

export default function ResidencyContent() {
    return (
        <section className="py-8 xl:py-16 max-w-7xl mx-auto px-5 bg-white">
            <div className="grid xl:grid-cols-3 sm:gap-16">
                <div className="xl:col-span-2 px-8 appearLeftContent">
                    <h2 className="text-secondaryColor text-xl lg:text-4xl font-medium lg:leading-snug">
                        ¿Que tipos de residencia puedo solicitar?
                    </h2>
                    <div className="prose max-w-max mt-6">
                        <div className='my-6'>
                            <details open><summary className='cursor-pointer'><strong>Residencia temporaria :</strong></summary><p className='pl-8'>La Radicación Temporaria es la autorización otorgada a los ciudadanos extranjeros que tienen ánimo de residir temporalmente en el país mientras duren las actividades que dieron origen a su intención de radicarse por un periodo determinado, de conformidad con lo establecido en la Ley N° 978/96 de Migraciones y su reglamentación.

                                ¿Quiénes pueden aplicar a esta radicación?
                                Los ciudadanos extranjeros de cualquier nacionalidad, que cumplan los requerimientos establecidos para el trámite.

                                ¿Cuál es el plazo de permanencia otorgado?
                                El plazo máximo de duración en esta categoría de residencia es de 1 (un) año.

                                ¿Es prorrogable?
                                Sí, esta radicación puede ser prorrogada hasta cinco veces, por periodos iguales al autorizado (un año), según la profesión, actividad y/o motivo de la radicación.

                                ¿Cuál es el documento obtenido con este trámite?
                                Es el Carnet de Admisión Temporaria.
                                Accede a los requisitos y aranceles de este trámite, aquí

                                ¿Puedo iniciar mi trámite estando fuera del Paraguay?

                                Sí. Para los ciudadanos extranjeros que se encuentran fuera del territorio nacional y se ven afectados por el cierre de fronteras debido al Estado de Emergencia Sanitaria por la pandemia COVID-19, la DGM pone a disposición de los mismos la posibilidad de iniciar su trámite de radicación bajo la modalidad de representación legal, reglamentada mediante la Resolución DGM N° 311, de fecha 30/06/20, de conformidad con el artículo 41 de la ley 978/96 de Migraciones.</p>
                                <details className='ml-8 mt-2'><summary className='cursor-pointer'><strong>Requisitos para obtener residencia temporaria :</strong></summary>
                                <p className='pl-8'>
                                    Requisitos/Observaciones	¿Qué debe presentar?
                                    Original	Fotocopia Simple	Fotocopia Autenticada
                                    Requisitos Generales
                                    1.	Documento de Identidad vigente del país de origen:
                                    Opción 1: Cédula de Identidad o DNI vigente, acompañada del comprobante de ingreso al país.
                                    Opción 2: Pasaporte vigente, con el sello de ingreso al país.
                                    * El comprobante y/o sello de ingreso al país se expide en los puestos de control migratorio fronterizos y aeroportuarios, al registrar su entrada al Paraguay.	Sí	-	1 (una)
                                    2.	Visa Consular o En Arribo; en el caso de los países que la requieran.
                                    * La visa deberá contar con la verificación correspondiente del Ministerio de Relaciones Exteriores en Paraguay.
                                    Consulte el listado de países con acuerdos de supresión de visas con Paraguay y el listado de países beneficiarios de las visas en arribo en Paraguay)	Sí	-	1 (una)
                                    3.	Certificado de Nacimiento, expedido por el país de origen o por la representación diplomática del país de origen en Paraguay.
                                    * Si el documento fue emitido en el exterior, debe estar legalizado o apostillado.	Sí	-	1 (una)
                                    4.	Certificado de Antecedentes Policiales o Penales vigente (Requerido a partir de los 14 años de edad):
                                    Opción 1: Si su última residencia fue en su país de origen;
                                    Certificado de Antecedentes del país de origen, expedido por la autoridad competente del país emisor, con vigencia a nivel nacional.
                                    *Si el documento fue emitido en el exterior, debe estar legalizado o apostillado.	Sí	-	1 (una)
                                    Opción 2: Si residió en otro país durante los últimos 5 años;
                                    Certificado de Antecedentes del país de residencia, expedido por la autoridad competente del país emisor, con vigencia a nivel nacional y documento respaldatorio que acredite que el/la interesado/a residió en dicho país durante los últimos 5 años.
                                    *Si el documento fue emitido en el exterior, debe estar legalizado o apostillado.	Sí	-	1 (una)
                                    Opción 3: Si reside en Paraguay desde hace más de 5 años;
                                    1- Información Sumaria de Testigos, expedida por el Juzgado de Justicia Letrada del Poder Judicial del Paraguay, con la aclaración de que el solicitante vive y reside desde hace más de 5 años en el país.
                                    2- Certificado de Antecedentes de INTERPOL vigente, expedido por el Departamento de INTERPOL de la Policía Nacional del Paraguay.
                                    *Los documentos emitidos en Paraguay no requieren legalización.	Sí	-	1 (una)
                                    5.	Certificado de Antecedentes para Extranjeros vigente, expedido por el Departamento de Informática de la Policía Nacional del Paraguay.
                                    (Requerido a partir de los 14 años de edad)	Sí	-	1 (una)
                                    6.	Constancia de Estado Civil, expedida por la autoridad competente del país emisor (Solo si corresponde):
                                    Opción 1: Certificado de Matrimonio.
                                    Opción 2: Sentencia de Divorcio.
                                    Opción 3: Certificado de Defunción.
                                    *Si el documento fue emitido en el exterior, debe estar legalizado o apostillado.	Sí	-	1 (una)
                                    7.	Certificado de Vida y Residencia vigente, expedido por una Comisaría Jurisdiccional en Paraguay.	Sí	-	1 (una)
                                    8.	Certificado Sanitario, expedido por un médico clínico habilitado por el Ministerio de Salud del Paraguay, en el que conste que el/la solicitante goza de buena salud física, mental y carece de enfermedad infecto-contagiosa.
                                    * El documento debe estar visado por el Ministerio de Salud del Paraguay.	Sí	-	1 (una)
                                    9.	Demostración de solvencia económica
                                    (Acreditación de medios de vida lícitos)	Ver las opciones de demostración de solvencia económica en el ANEXO
                                    10.	Certificado de Antecedentes de Interpol vigente, expedido por el Departamento de Interpol de la Policía Nacional de Paraguay (Requerido a partir de los 14 años)	Sí	-	1 (una)
                                    Requisitos adicionales para solicitantes menores de 18 años de edad
                                    11.	Documento de Identidad de los padres o tutores legales.	Sí	-	1 (una)
                                    12.	En caso de ausencia de uno o ambos padres, adjuntar;
                                    Poder especial, emitido por una Escribanía Pública en el país de origen del documento, con el cual se autoriza el viaje del menor y la tramitación de sus documentaciones ante la Dirección General de Migraciones con el acompañamiento del padre o tutor designado para el efecto.
                                    * El poder especial debe estar firmado por el o los padres ausentes.
                                    * Si el Poder Especial fue emitido en el exterior, debe estar visado y legalizado o apostillado.
                                    * El tutor debe estar radicado en el país o ser de nacionalidad paraguaya.	Sí	-	1 (una)
                                    12.	Constancia de estudios (Si el solicitante está cursando estudios primarios o secundarios en Paraguay)	Sí	-	1 (una)</p></details>
                            </details>
                        </div>
                        <div className='my-6'>
                            <details><summary className='cursor-pointer'><strong>Residencia permanente :</strong></summary><p className='pl-8'>La Radicación Permanente es la autorización de residencia otorgada a ciudadanos extranjeros que deseen establecerse en el territorio paraguayo en forma definitiva y con el propósito de realizar cualquier clase de actividad que las autoridades consideren útiles al desarrollo del país, de conformidad con lo establecido en la Ley N° 978/96 de Migraciones y su reglamentación.

                                ¿Quiénes pueden aplicar a esta radicación?
                                Los ciudadanos extranjeros de cualquier nacionalidad, que cumplan los requerimientos establecidos para el trámite.
                                Los solicitantes no necesitan contar con una radicación previa en Paraguay, por lo tanto pueden aplicar directamente al cambio de categoría de No Residente a Residente Permanente, mediante este tipo de radicación.

                                ¿Cuál es el plazo de permanencia otorgado?
                                El plazo de permanencia es definitivo, salvo que el extranjero con residencia permanente incurra en alguna de las causales que puedan dar lugar a la cancelación de la permanencia o a la expulsión.

                                ¿Cuál es el documento obtenido con este trámite?
                                Es el Carnet de Admisión Permanente.

                                Accede a los requisitos y aranceles de este trámite, aquí

                                ¿Puedo iniciar mi trámite estando fuera del Paraguay?

                                Sí. Para los ciudadanos extranjeros que se encuentran fuera del territorio nacional y se ven afectados por el cierre de fronteras debido al Estado de Emergencia Sanitaria por la pandemia COVID-19, la DGM pone a disposición de los mismos la posibilidad de iniciar su trámite de radicación bajo la modalidad de representación legal, reglamentada mediante la Resolución DGM N° 311, de fecha 30/06/20, de conformidad con el artículo 41 de la ley 978/96 de Migraciones.
                                Accede a los requisitos de esta modalidad de trámite, aquí</p></details>
                        </div>
                    </div>
                </div>
                <div className='relative block w-full appearRightContent'>
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
