import Layout from "../../../../components/shared/Layout";
import PageHeader from "../../../../components/shared/PageHeader";
import PostList from "../../../../components/shared/PostList";
import { fetchAPI } from "../../../../utils/fetch-api";
import { MetaDataProps, generateMetaData } from "../../../../utils/generateMetaData";

;

async function fetchPostsByCategory(filter: string) {

    try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const path = `/articles`;
        const urlParamsObject = {
            sort: { createdAt: 'desc' },
            filters: {
                category: {
                    slug: filter,
                },
            },
            populate: {
                cover: { fields: ['url'] },
                category: {
                    populate: '*',
                },
                authorsBio: {
                    populate: '*',
                },
            },
        };
        const options = { headers: { Authorization: `Bearer ${token}` } };
        const responseData = await fetchAPI(path, urlParamsObject, options);
        return responseData;
    } catch (error) {
        console.error(error);
    }
}
export default function CategoryRoute({ responseData, params }: { responseData: any; params: { category: string } }) {
    // Check if data exists
    const { data } = responseData;

    if (!data || data.length === 0) {
        return (
                <section className="bg-white min-h-screen">
                    <div>Not Posts In this category</div>
                </section>
        );
    }

    const { name, description } = data[0]?.attributes?.category?.data?.attributes || {};
    const seoData = {
        seoUrl: `https://asesoraparaguay.com/en/blog/${params.category}`,
        metaTitle: name,
        metaDescription: description,
        shareImage: data?.[0]?.attributes?.seo?.shareImage?.data?.attributes?.url,
    }
    return (
        <>
        {generateMetaData({ seo: seoData })}
        <section className='bg-white min-h-screen min-w-full container p-8 mx-auto'>
            <PageHeader heading={name} />
            <PostList data={data} />
        </section>
        </>
    );
}

export async function getServerSideProps({ params }: { params: { category: string } }) {
    const filter = params.category;
    const responseData = await fetchPostsByCategory(filter);
    return {
        props: { responseData, params },
    };
}