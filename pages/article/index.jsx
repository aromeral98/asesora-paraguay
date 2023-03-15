import { Helmet } from "react-helmet"
import Layout from "../../components/shared/Layout"
import { jsonLDTypes } from "../../jsonLD/types/jsonLDTypes"
import articles from '../../articles/index.json'
import Link from "next/link"

export default function ArticleList() {
    const data = articles
    return (
        <Layout>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLDTypes.organization[0])}
                </script>
                <title>Artículos interesantes sobre Paraguay - Asesora Paraguay</title>
                <meta name="description" content="Encuentra aquí una selección de artículos interesantes sobre Paraguay en diferentes temas: turismo, negocios, cultura, entre otros." />
                <meta name="keywords" content="artículos interesantes, Paraguay, turismo, negocios, cultura" />
                <meta name="author" content="Asesora Paraguay" />
            </Helmet>
            <section className='relative py-8 lg:px-8 px-4 bg-white w-full lg:w-8/12 mx-auto flex flex-col grow space-y-5'>
                <h2 className="text-secondaryColor text-3xl font-medium capitalize">
                    Ultimos artículos
                </h2>
                <div className="w-full flex flex-col items-center justify-center space-y-8">
                    {Object.entries(data).map(([key, value]) => (
                        <Link href={value.href} className="container space-y-5 text-left mx-auto cursor-pointer w-full" key={key}>
                            <div className="max-w-sm w-full lg:max-w-full lg:flex">
                                <div className="border-r border-t border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-b lg:border-gray-400 bg-white rounded-t lg:rounded-b-none lg:rounded-l p-4 flex flex-col justify-between leading-normal">
                                    <div className="mb-8">
                                        <div className="text-gray-900 font-bold text-xl mb-2">{value.title}</div>
                                        <p className="text-gray-700 text-base">{value.description}</p>
                                    </div>
                                </div>
                                <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-b lg:rounded-t-none lg:rounded-r text-center overflow-hidden" style={{ backgroundImage: `url(${value?.image?.src})`, backgroundPosition: 'center' }} title={value?.image?.alt}>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    )
}
