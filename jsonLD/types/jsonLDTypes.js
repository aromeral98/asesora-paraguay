export const jsonLDTypes = {
    organization: [{
        "@context": "https://schema.org/",
        "@type": "Organization",
        "name": "Asesora Paraguay",
        "url": "https://asesoraparaguay.com/",
        "logo": "https://asesoraparaguay.com/logo.webp",
        "description": "We offer advisory services for residency processing in Paraguay to foreigners, especially for digital nomads and freelancers who want to pay less taxes.",
        "rss": [
            "https://www.facebook.com/asesoraparaguay/",
            "https://twitter.com/asesoraparaguay/",
            "https://www.instagram.com/asesoraparaguay/"
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Main Street 1234",
            "addressLocality": "Asunción",
            "postalCode": "12345",
            "addressCountry": "Paraguay"
        },
    }],
    freelance: [
        {
            "@context": "https://schema.org",
            "@type": "Advantages",
            "name": "Advantages of Applying for Residency in Paraguay",
            "description": "We process residency in Paraguay for foreigners, mainly focused on digital nomads or freelancers who want to pay less taxes.",
            "url": "https://asesoraparaguay.com/freelance",
            "mainEntity": {
                "@type": "offers",
                "name": "Residency for Freelancers",
                "description": "Get your residency in Paraguay as a freelancer and pay only 10% in taxes.",
                "brand": {
                    "@type": "OrganizationName",
                    "name": "Asesora Paraguay"
                },
                "additionalProperty": [
                    {
                        "@type": "Advantage",
                        "name": "Territorial taxation",
                        "value": "If you are a digital nomad and your income comes from outside of Paraguay, you will be totally exempt from paying taxes on it. Dividends from a foreign company would also be completely tax-free."
                    },
                    {
                        "@type": "Advantage",
                        "name": "Visit the country at least once every 3 years",
                        "value": "According to the current regulation of the country, you must visit the country at least once every 3 years to demonstrate that you actually reside there. Similarly, there is no way to prove that stay, so some people spend longer periods without entering Paraguay."
                    },
                    {
                        "@type": "Advantage",
                        "name": "Good climate for entrepreneurship",
                        "value": "Paraguay is a country where infrastructure is still largely underdeveloped and in need of improvement. Therefore, it becomes a good investment option thanks to low taxes and government support to encourage foreign investment in the country in any of its forms."
                    },
                    {
                        "@type": "Advantage",
                        "name": "Lifelong permanent residency",
                        "value": "Permanent residency in Paraguay has no expiration date, so you won't have to worry about renewing it."
                    },
                    {
                        "@type": "Advantage",
                        "name": "Rights with your residency",
                        "value": "Once you obtain your residency, you will have access to the same rights as any citizen, except for participation in politics. You can set up companies, businesses, get a driver's license, invest, and even buy properties if your goal is to stay and live in the country or even enter the real estate business."
                    }
                ]
            }
        },
        {
            "@context": "https://schema.org/",
            "@type": "Requirements",
            "name": "Requirements for residency application in Paraguay",
            "description": "Learn about the necessary requirements for applying for residency in Paraguay.",
            "requirements": [
                {
                    "@type": "Requirement",
                    "name": "Birth certificate",
                    "description": "An up-to-date copy of the original issued by the corresponding civil registry is sufficient."
                },
                {
                    "@type": "Requirement",
                    "name": "Good conduct certificate or criminal record",
                    "description": "This document is only necessary for persons over 14 years of age and should not be more than 2.5 months old."
                },
                {
                    "@type": "Requirement",
                    "name": "Marriage or divorce certificate",
                    "description": "If you are married or divorced, you must present the respective certificate to prove your marital status. Depending on your country of origin, these documents must either be apostilled with the Hague Apostille, as is the case in Spain, or in certain cases they must be legalized by the corresponding Paraguayan consulate in your country of origin or current residence."
                },
                {
                    "@type": "Requirement",
                    "name": "Local currency bank account",
                    "description": "You must demonstrate financial solvency with a deposit of 34,331,150 Paraguayan guaraníes (approx. 4,600€) that will be held in escrow until you obtain your residency card and identity card. Once these documents have been obtained, the deposit can be withdrawn. If you are married, only one account is required for the couple and/or the family with minor children. If you hold a University-level Professional Degree, you can use it as collateral to demonstrate financial solvency and avoid having to make the above-mentioned deposit. If you are a pensioner, the notification of your pension also serves as proof of financial solvency and the deposit will not be required."
                },
                {
                    "@type": "Requirement",
                    "name": "Health Certificate",
                    "description": "This document can be obtained directly in Paraguay during your visit to apply for residency."
                },
                {
                    "@type": "Requirement",
                    "name": "Pension notification",
                    "description": "If you are a pensioner, you must present the document indicating the amount you currently receive, issued by the competent authority, pension fund, etc., in order to prove financial solvency."
                }
            ]
        }
    ]
}