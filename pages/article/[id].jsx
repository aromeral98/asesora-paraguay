import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { articles } from '../../articles'
import Layout from '../../components/shared/Layout'
import ShareBar from '../../components/shared/ShareBar'
import { jsonLDTypes } from '../../jsonLD/types/jsonLDTypes'
import advantages from '../../articles/advantages.json'
import { useRouter } from 'next/router'

export default function Article({ title, article }) {
  const { t } = useTranslation('global')
  const seoDescription = "Descubre por qué Paraguay es un destino atractivo para freelancers y autónomos. Conoce las ventajas fiscales que ofrece el país, como bajos impuestos, facilidades para emprender cualquier tipo de negocio y mano de obra barata. Además, con un clima favorable y una economía bancarizada, Paraguay es el lugar ideal para trabajar y hacer negocios."
  useEffect(() => {
    console.log(article)
  }, [])

  // function renderArticle(article) {
  //   const html = [];
  //   for (let i = 1; i <= article.length; i++) {
  //     const paragraph = article[i];
  //     if (paragraph) {
  //       const paragraphHtml = paragraph.replace(/<strong>(.*?)<\/strong>/g, '<strong>$1</strong>');
  //       html.push(
  //         <p key={i} className="text-dark lg:text-lg" dangerouslySetInnerHTML={{ __html: paragraphHtml }} />
  //       );
  //     }
  //   }
  //   return <>{html}</>
  // }

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
        <title>{title}</title>
        <meta name="description" content="Descubre por qué Paraguay es un destino atractivo para freelancers y autónomos. Conoce las ventajas fiscales que ofrece el país, como bajos impuestos, facilidades para emprender cualquier tipo de negocio y mano de obra barata. Además, con un clima favorable y una economía bancarizada, Paraguay es el lugar ideal para trabajar y hacer negocios." />
        <meta name="keywords" content="Paraguay, freelancers, autónomos, bajos impuestos, facilidades para emprendedores, mano de obra barata" />
        <meta property="og:title" content="Ventajas fiscales para freelancers en Paraguay | Bajos impuestos y facilidades para emprendedores" />
        <meta property="og:description" content="Descubre por qué Paraguay es un destino atractivo para freelancers y autónomos. Conoce las ventajas fiscales que ofrece el país, como bajos impuestos, facilidades para emprender cualquier tipo de negocio y mano de obra barata. Además, con un clima favorable y una economía bancarizada, Paraguay es el lugar ideal para trabajar y hacer negocios." />
        <meta property="og:image" content="URL de la imagen que quieras mostrar en la publicación" />
        <meta property="og:url" content="URL del artículo en tu sitio web" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ventajas fiscales para freelancers en Paraguay | Bajos impuestos y facilidades para emprendedores" />
        <meta name="twitter:description" content="Descubre por qué Paraguay es un destino atractivo para freelancers y autónomos. Conoce las ventajas fiscales que ofrece el país, como bajos impuestos, facilidades para emprender cualquier tipo de negocio y mano de obra barata. Además, con un clima favorable y una economía bancarizada, Paraguay es el lugar ideal para trabajar y hacer negocios." />
        <meta name="twitter:image" content="URL de la imagen que quieras mostrar en la publicación" />
        <meta name="twitter:url" content="URL del artículo en tu sitio web" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <article className='relative py-8 lg:px-8 px-4 bg-white w-full lg:w-8/12 mx-auto flex flex-col grow'>
        <section className="container space-y-4 text-left mx-auto px-5" >
          <h2 className="text-secondaryColor text-3xl font-medium capitalize">
            {title}
          </h2>
          <div className="space-y-4 lg:space-y-8">
            <h5 className="text-lg lg:text-xl font-bold leading-tight lg:leading-relaxed">Impuestos bajos y exenciones para freelancers</h5>
            <p className="text-dark lg:text-lg">
              Una de las principales ventajas fiscales que ofrece Paraguay es su IVA del 10%. Si eres freelancer y vendes servicios o productos dentro del país, deberás pagar solamente el 10% de impuesto al valor agregado. Pero si tus servicios son para clientes fuera del país, estarás exento de pagar este impuesto.
            </p>
          </div>
        </section>
        <div className="flex justify-end my-8">
          <ShareBar title={title} description={seoDescription} />
        </div>
      </article>
    </Layout>
  )
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'advantages' } }, 
      { params: { id: '22442' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const filePath = `../../articles/${id}.json`;
  const article = filePath
  
  return { props: article };
}