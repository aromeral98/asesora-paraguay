export const jsonLDTypes = {
    organization: [{
        "@context": "https://schema.org/",
        "@type": "Organization",
        "name": "Asesora Paraguay",
        "url": "https://asesoraparaguay.com/",
        "logo": "https://asesoraparaguay.com/logo.webp",
        "description": "Ofrecemos servicios de asesoría para la tramitación de residencias en Paraguay a extranjeros, especialmente para nómadas digitales y freelancers que desean pagar menos impuestos.",
        "sameAs": [
            "https://www.facebook.com/AsesoraParaguay/",
            "https://twitter.com/AsesoraParaguay/",
            "https://www.instagram.com/AsesoraParaguay/"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Calle Principal 1234",
            "addressLocality": "Asunción",
            "postalCode": "12345",
            "addressCountry": "Paraguay"
        },
    }],
    freelance: [
        {
            "@context": "https://schema.org",
            "@type": "Advantages",
            "name": "Ventajas de solicitar residencia en Paraguay",
            "description": "Tramitamos residencias en Paraguay para extranjeros, principalmente enfocado a nómadas digitales o freelancers que quieran pagar menos impuestos",
            "url": "https://asesoraparaguay.com",
            "mainEntity": {
                "@type": "offers",
                "name": "Residencia para Freelancers",
                "description": "Obtén tu residencia en Paraguay como freelancer y paga solo el 10% de impuestos",
                "brand": {
                    "@type": "OrganizationName",
                    "name": "Asesora Paraguay"
                },
                "additionalProperty": [
                    {
                        "@type": "Advantage",
                        "name": "Tributación territorial",
                        "value": "Si eres nómada digital y tus ingresos provienen de fuera del Paraguay, estarás totalmente exento de tributar por ellos. El pago de dividendos provenientes de una empresa extranjera también estaría totalmente libre de impuestos."
                    },
                    {
                        "@type": "Advantage",
                        "name": "Visita el país un mínimo de 1 vez cada 3 años",
                        "value": "Según la regulación actual del país, debes pasar al menos 1 vez cada 3 años por el país para demostrar que efectivamente resides en él. De igual forma, no hay forma de comprobar esa estancia por lo tanto hay gente que pasa periodos más largos sin entrar al Paraguay."
                    },
                    {
                        "@type": "Advantage",
                        "name": "Buen clima para emprendimiento",
                        "value": "Paraguay es un país en el cual las infraestructuras todavía están por desarrollar y mejorar en gran parte. Por lo tanto, se vuelve una buena opción a la hora de inversión, gracias a los bajos impuestos y la ayuda de los gobiernos para incentivar la inversión extranjera en el país en cualquiera de sus formas."
                    },
                    {
                        "@type": "Advantage",
                        "name": "Residencia permanente vitalicia",
                        "value": "La residencia permanente en Paraguay no tiene fecha de caducidad, por lo tanto, no tendrás que preocuparte por renovarla."
                    },
                    {
                        "@type": "Advantage",
                        "name": "Derechos con tu residencia",
                        "value": "Una vez que obtengas tu residencia, podrás acceder a los mismos derechos que cualquier ciudadano, excepto a la participación en la política. Podrás montar empresas, negocios, sacarte el carnet de conducir, invertir e incluso podrás comprar propiedades si tu objetivo es quedarte a vivir o incluso entrar en el negocio inmobiliario."
                    }
                ]
            }
        },
        {
            "@context": "https://schema.org/",
            "@type": "Requisitos",
            "name": "Requisitos para solicitud de residencia en Paraguay",
            "description": "Conoce los requisitos necesarios para solicitar la residencia en Paraguay.",
            "requirements": [
                {
                    "@type": "Requirement",
                    "name": "Certificado de nacimiento",
                    "description": "Una copia actual del original emitida por el registro civil correspondiente es suficiente."
                },
                {
                    "@type": "Requirement",
                    "name": "Carta de buena conducta o antecedentes penales",
                    "description": "Este documento es sólo necesario para mayores de 14 años y no debe tener más de 2,5 meses de antigüedad."
                },
                {
                    "@type": "Requirement",
                    "name": "Certificado de matrimonio o divorcio",
                    "description": "En caso de estar casado o divorciado, debes presentar el certificado respectivo para comprobar tu estado civil. Según sea tu país de origen, estos documentos deben estar o apostillados con la apostilla de La Haya, como es el caso de España; o en ciertos casos deben ser legalizados por el consulado de Paraguay correspondiente en tu país de origen o de residencia actual."
                },
                {
                    "@type": "Requirement",
                    "name": "Cuenta bancaria en moneda local",
                    "description": "Debes demostrar solvencia económica con un depósito de 34.331.150 de guaraníes (aprox. 4.600€) que se mantendrá bloqueado hasta obtener el carné de radicación y la cédula de identidad. Una vez retirados estos documentos, puede retirarse también el depósito. En caso de estar casado, sólo se requiere una única cuenta para la pareja y/o la familia con hijos menores de edad. Si posees un Título Profesional a nivel Universitario, puedes utilizarlo como aval para demostrar solvencia económica y así evitar tener que realizar el depósito arriba mencionado. Si eres pensionado, la notificación de la pensión también sirve como aval de solvencia económica y no se necesitará el depósito."
                },
                {
                    "@type": "Requirement",
                    "name": "Certificado Sanitario",
                    "description": "Este documento lo obtienes directamente en Paraguay durante tu visita para realizar la solicitud de residencia."
                },
                {
                    "@type": "Requirement",
                    "name": "Notificación de la pensión",
                    "description": "En caso de ser pensionado, deberás presentar el documento que indique el importe que actualmente percibes, expedido por la entidad competente, caja de pensiones, etc., a fin de probar solvencia económica."
                }
            ]
        }
    ]
}