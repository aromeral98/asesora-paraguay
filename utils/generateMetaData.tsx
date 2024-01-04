import Head from "next/head";
import { jsonLDTypes } from "../jsonLD/types/en/jsonLDTypes";

export type MetaDataProps = {
    seo: {
        seoUrl: string;
        metaTitle: string;
        metaDescription?: string;
        author?: string;
        shareImage?: string;
        dates?: {
            publishedAt?: string;
            updatedAt?: string;
        }
    }
};

export const generateMetaData = ({ seo }: MetaDataProps): JSX.Element => {
    const seoImage = seo?.shareImage || ""
    const title = seo?.metaTitle || '';
    const description = seo?.metaDescription || '';
    const seoUrlWithHost = seo?.seoUrl || window?.location?.href;
    const dates = seo?.dates;
    const author = seo?.author;

    return (<Head>
        <title>{title}</title>
        <meta name="description" content={description} />
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
        <meta name="google-adsense-account" content="ca-pub-5540483073331516"></meta>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5540483073331516"
            crossOrigin="anonymous"></script>
        <script async src="https://www.googletagservices.com/tag/js/gpt.js"
            crossOrigin="anonymous"></script>
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
