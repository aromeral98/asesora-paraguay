
import Post from '../../../../../components/shared/Post';
import { fetchAPI } from '../../../../../utils/fetch-api';
import { generateMetaData } from "../../../../../utils/generateMetaData"
import ShareBar from '../../../../../components/shared/ShareBar';
import ArticleSelect from '../../../../../components/shared/ArticleSelect';
import NoDataFound from '../../../../../components/shared/NoDataFound';

async function fetchSideMenuData(slug: string, category?: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            cover: { fields: ['url', "alternativeText"] },
            authorsBio: { populate: '*' },
            category: { fields: ['name'] },
            blocks: { populate: '*' },
            seo: { populate: '*' },
        },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const articlesResponse = await fetchAPI(
        "/articles",
        category
          ? {
              filters: {
                category: {
                  name: category,
                },
              },
            }
          : {},
        options
      );

    const categoriesResponse = await fetchAPI(
        "/categories",
        { populate: "*" },
        options
    );
    const articleResponse = await fetchAPI(
        "/articles", urlParamsObject, options);

    return {
        article: articleResponse.data,
        articles: articlesResponse.data,
        categories: categoriesResponse.data,
    };
}

export async function getServerSideProps({ params }: { params: { slug: string, category:string } }) {
    const { slug, category } = params;
    const data = await fetchSideMenuData(slug, category);

    if (data.articles.length === 0) {
        return {
            notFound: true,
        };
    }

    if (data.categories.length === 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            data: {
                articles: data.articles,
                categories: data.categories,
                article: data.article[0],
                params
            }
        },
    };
}

export default function PostRoute({ data }: { data: any }) {
    const article = data.article;
    const { articles, categories, params } = data;

    if (!article) return <NoDataFound title={"The post you are searching doesn't exist"} />

    const seoData = {
        ...article.attributes.seo,
        shareImage: article?.attributes?.seo?.shareImage?.data?.attributes?.url,
        author: article?.attributes?.authorsBio?.data?.attributes?.name,
        dates: {
            publishedAt: new Date(article.attributes.publishedAt),
            updatedAt: new Date(article.attributes.updatedAt)
        },
        seoUrl: article.attributes.category.data.attributes.name + "/" + article.attributes.slug
    }
    return (
        <>
            {generateMetaData({ seo: seoData })}
            <section className="container p-8 mx-auto space-y-6 sm:space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4">
                    <div className="col-span-2">  
                    <section className='bg-white flex w-full justify-center container p-4 mx-auto flex-col'>
                        <Post data={article} />
                        <section id='shareBar' className='flex justify-end'>
                            <ShareBar title={data?.attributes?.seo?.name} description={data?.attributes?.seo?.description} />
                        </section>
                    </section></div>
                    <aside>
                        <ArticleSelect
                            categories={categories}
                            articles={articles}
                            params={params}
                        />
                    </aside>
                </div>
            </section>

        </>
    );
}