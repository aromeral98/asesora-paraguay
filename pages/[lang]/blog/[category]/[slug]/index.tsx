
import Layout from '../../../../../components/shared/Layout';
import Post from '../../../../../components/shared/Post';
import { fetchAPI } from '../../../../../utils/fetch-api';
import { generateMetaData } from "../../../../../utils/generateMetaData"
import ShareBar from '../../../../../components/shared/ShareBar';

async function getPostBySlug(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            cover: { fields: ['url'] },
            authorsBio: { populate: '*' },
            category: { fields: ['name'] },
            blocks: { populate: '*' },
            seo: { populate: '*' },
        },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

export async function getServerSideProps({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const data = await getPostBySlug(slug);

    if (data.data.length === 0) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            data: data.data[0]
        },
    };
}

export default function PostRoute({ data }: { data: any }) {
    const seoData = {
        ...data.attributes.seo,
        author: data?.attributes?.authorsBio?.data?.attributes?.name,
        dates: {
            publishedAt: new Date(data.attributes.publishedAt),
            updatedAt: new Date(data.attributes.updatedAt)
        },
        seoUrl: data.attributes.category.data.attributes.name + "/" + data.attributes.slug
    }

    return (
        <>
            {generateMetaData({ seo: seoData })}
            <Layout>
                <section className='bg-white flex w-full xl:w-8/12 justify-center container p-12 mx-auto flex-col'>
                    <Post data={data} />
                    <section id='shareBar' className='flex justify-end'>
                        <ShareBar title={data?.attributes?.seo?.name} description={data?.attributes?.seo?.description} />
                    </section>
                </section>
            </Layout>
        </>
    );
}