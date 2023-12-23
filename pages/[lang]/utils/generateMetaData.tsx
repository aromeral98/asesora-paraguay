import Head from "next/head";
import { getStrapiMedia } from "./api-helpers";
import { jsonLDTypes } from "../../../jsonLD/types/en/jsonLDTypes";

type MetaDataProps = {
    seo: {
        seoUrl: string;
        metaTitle: string;
        metaDescription: string;
        author: string;
        shareImage: {
            data: null | any
        };
        dates: {
            publishedAt: string;
            updatedAt: string;
        }
    }
};

export const generateMetaData = ({ seo }: MetaDataProps): JSX.Element => {
    const seoImage = getStrapiMedia(seo?.shareImage?.data?.attributes?.url)
    const title = seo.metaTitle || '';
    const description = seo.metaDescription || '';
    const keywords = extractKeywords(description);
    const seoUrlWithHost = seo.seoUrl;
    const dates = seo.dates;
    const author = seo?.author;

    return (<Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={seoImage || ""} />
        <meta property="og:url" content={seoUrlWithHost} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={seoImage || ""} />
        <meta name="twitter:url" content={seoUrlWithHost} />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLDTypes.organization[0]) }}
        />
        {generateJSONLD({ title, description, seoUrlWithHost, dates, seoImage, author })}
    </Head>)
};

type JSONLDProps = {
    title: string; description: string; seoUrlWithHost?: string;
    dates?: {
        publishedAt?: string;
        updatedAt?: string;
    },
    author?: string;
    seoImage?: string | null;
}
const generateJSONLD = ({ title, description, seoUrlWithHost, dates, seoImage, author }: JSONLDProps): JSX.Element => {
    const jsonLD = {
        "@context": "https://schema.org/",
        "@type": "Article",
        "name": title,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": seoUrlWithHost,
        },
        "url": seoUrlWithHost,
        "headline": title,
        "description": description,
        "datePublished": dates?.publishedAt,
        "dateModified": dates?.updatedAt,
        "image": seoImage,
        "author": {
            type: "@Person",
            name: author,
        }
    }
    return <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
    />
};

const extractKeywords = (description: string) => {
    const words = description.split(/\s+/);
    const filteredWords = words.filter(word => word.length >= 4);
    const uniqueWords = Array.from(new Set(filteredWords));
    const limitedKeywords = uniqueWords.slice(0, 10);
    return limitedKeywords;
};
