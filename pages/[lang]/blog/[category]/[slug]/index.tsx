
import type { Metadata } from 'next';
import Layout from '../../../../../components/shared/Layout';
import Post from '../../../../../components/shared/Post';
import { fetchAPI } from '../../../utils/fetch-api';


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
        },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const meta = await getMetadata(params.slug);
    const metadata = meta?.[0]?.attributes?.seo;

    return {
        title: metadata?.metaTitle,
        description: metadata?.metaDescription,
    };
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
            data: data.data[0],
        },
    };
}

export default function PostRoute({ data }: { data: any }) {
    return (
        <Layout>
            <section className='bg-white flex lg:w-8/12 justify-center container p-12 mx-auto'>
                <Post data={data} />
            </section>
        </Layout>
    );
}