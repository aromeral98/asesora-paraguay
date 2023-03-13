import { Helmet } from 'react-helmet'
import Layout from '../../components/shared/Layout'
import ShareBar from '../../components/shared/ShareBar'
import { jsonLDTypes } from '../../jsonLD/types/jsonLDTypes'
import image from '../../public/img/articles/advantages/0.webp'
import { articlesJSONLD } from '../../jsonLD/types/articlesJSONLD'

export default function Article({ id,
  article = {
    "seo": {
      "title": "Ventajas fiscales para freelancers en Paraguay | Bajos impuestos y facilidades para emprendedores",
      "description": "Descubre por qué Paraguay es atractivo para freelancers y autónomos. Bajos impuestos, facilidades para emprender y mano de obra barata. Clima favorable y economía bancarizada. El lugar ideal para trabajar y hacer negocios. #Paraguay #Freelancers #Negocios",
      "keywords": "Paraguay, freelancers, autónomos, bajos impuestos, facilidades para emprendedores, mano de obra barata"
    },
    "article": {
      "image": {
        "src": "https://www.bancomundial.org/content/dam/photos/780x439/2019/feb-1/PY-Asuncion.jpg",
        "width": 780,
        "height": 437,
        "alt": "Asuncion landscape of the city"
      },
      "paragraph": "Paraguay es uno de los países más atractivos para los negocios en América Latina, gracias a su política de <strong>bajos impuestos</strong> y su facilidad para hacer negocios. Esto lo hace especialmente interesante para aquellos <strong>freelancers</strong> y <strong>autónomos</strong> que buscan establecer su negocio en un entorno económico favorable.",
      "title1": "Impuestos bajos y exenciones para freelancers",
      "paragraph1": "Una de las principales ventajas fiscales que ofrece Paraguay es su IVA del 10%. Si eres freelancer y vendes servicios o productos dentro del país, deberás pagar solamente el 10% de impuesto al valor agregado. Pero si tus servicios son para clientes fuera del país, estarás exento de pagar este impuesto.",
      "paragraph1.1": "Además, el impuesto sobre la renta también es bastante bajo en Paraguay. Los freelancers y emprendedores pagan solamente el 10% de impuesto sobre la renta, lo que representa una tasa muy baja en comparación con otros países de la región. Y si decides abrir una <strong>LLC</strong> en Estados Unidos, también estarás exento de pagar impuestos, ya que los dividendos que provengan de empresas extranjeras no pagan impuestos en Paraguay.",
      "title2": "Clima favorable para los negocios en Paraguay",
      "paragraph2": "Otra de las ventajas de Paraguay es su clima económico favorable para los negocios. El país cuenta con una mano de obra barata y una gran facilidad para hacer contactos empresariales. Además, las restricciones para establecer negocios son mucho menores que en Europa, lo que hace que sea un destino atractivo para emprendedores de todo tipo.",
      "title3": "Infraestructura bancaria y facilidades para pagar",
      "paragraph3": "En cuanto a la infraestructura bancaria, Paraguay está bastante bancarizado, lo que hace que sea fácil y conveniente pagar con tarjeta y encontrar cajeros automáticos en casi cualquier lugar, incluso en los supermercados.",
      "paragraph3.1": "En conclusión, si eres freelancer o emprendedor y buscas un entorno económico favorable para establecer tu negocio, Paraguay es una excelente opción. Con su <strong>bajo impuesto al valor agregado y al impuesto sobre la renta</strong>, así como su clima económico favorable para los negocios y su infraestructura bancaria, este país es un destino atractivo para aquellos que buscan establecer su negocio en América Latina."
    }
  }
}) {

  function renderArticle() {
    let html = '';

    for (const [key, value] of Object.entries(article['article'])) {
      if (key.startsWith('title')) {
        html += `<h5 class="text-lg lg:text-xl font-bold leading-tight lg:leading-relaxed">${value}</h5>`;
      } else if (key.startsWith('paragraph')) {
        html += `<p class="text-dark lg:text-lg">${value}</p>`;
      } else if (key.startsWith('image')) {
        html += `<img src=${value.src} alt=${value.alt} style={{height: ${value.height}, width: ${value.width}}}/>`;
      }
    }

    return html;
  }

  return (
    <Layout>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLDTypes.organization[0])}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(articlesJSONLD?.[id]?.[0])}
        </script>
        <title>{article?.seo?.title}</title>
        <meta name="description" content={article.seo.description} />
        <meta name="keywords" content="Paraguay, freelancers, autónomos, bajos impuestos, facilidades para emprendedores, mano de obra barata" />
        <meta property="og:title" content={article.seo.title} />
        <meta property="og:description" content={article.seo.description} />
        <meta property="og:image" content="URL de la imagen que quieras mostrar en la publicación" />
        <meta property="og:url" content="URL del artículo en tu sitio web" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.seo.title} />
        <meta name="twitter:description" content={article.seo.description} />
        <meta name="twitter:image" content="URL de la imagen que quieras mostrar en la publicación" />
        <meta name="twitter:url" content="URL del artículo en tu sitio web" />
        <link rel="icon" href="/favicon.ico" />
      </Helmet>
      <article className='relative py-8 lg:px-8 px-4 bg-white w-full lg:w-8/12 mx-auto flex flex-col grow'>
        <section className="container space-y-4 text-left mx-auto px-5" >
          <h2 className="text-secondaryColor text-3xl font-medium capitalize">
            {article?.seo?.title}
          </h2>
          <div className="space-y-4 lg:space-y-6" dangerouslySetInnerHTML={{ __html: renderArticle() }}>
          </div>
        </section>
        <div className="flex justify-end my-8">
          <ShareBar title={article?.seo?.title} description={article?.seo?.description} />
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
      { params: { id: 'weather' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export async function getStaticProps({ params }) {
  const { id } = params;

  return {
    props: {
      id
    }
  };
}