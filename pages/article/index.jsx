import { Helmet } from "react-helmet"
import Layout from "../../components/shared/Layout"
import { jsonLDTypes } from "../../jsonLD/types/jsonLDTypes"
import articles from '../../articles/index.json'

export default function ArticleList() {
    const data = articles
    return (
        <Layout>
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLDTypes.organization[0])}
                </script>
                <title>Artículos</title>
                <meta name="description" content='Artículos' />
                <meta name="keywords" content="Paraguay, freelancers, autónomos, bajos impuestos, facilidades para emprendedores, mano de obra barata" />
                <link rel="icon" href="/favicon.ico" />
            </Helmet>
            <section className='relative py-8 lg:px-8 px-4 bg-white w-full lg:w-8/12 mx-auto flex flex-col grow space-y-5'>
                <h2 className="text-secondaryColor text-3xl font-medium capitalize">
                    Ultimos artículos
                </h2>
                {Object.entries(data).map(([key, value]) => (
                    <div className="container space-y-4 text-left mx-auto cursor-pointer" key={key}>
                        <div className="max-w-sm w-full lg:max-w-full lg:flex">
                            <div className="border-r border-t border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-white rounded-t lg:rounded-b-none lg:rounded-l p-4 flex flex-col justify-between leading-normal">
                                <div className="mb-8">
                                    <div className="text-gray-900 font-bold text-xl mb-2">{value.title}</div>
                                    <p className="text-gray-700 text-base">{value.description}</p>
                                </div>
                            </div>
                            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-b lg:rounded-t-none lg:rounded-r text-center overflow-hidden" style={{ backgroundImage: `url(${value.image.src})` }} title={value.image.alt}>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Layout>
    )
}
