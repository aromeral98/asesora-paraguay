
import Image from 'next/image';
import { formatDate } from '../../utils/api-helpers';
import { postRenderer } from '../../utils/post-renderer';

interface Large {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
    provider_metadata: any;
}

interface Article {
    id: number;
    attributes: {
        title: string;
        description: string;
        slug: string;
        cover: {
            data: {
                attributes: {
                    formats: {
                        large: Large;
                        small: Large;
                        medium: Large;
                        thumbnail: Large;
                    };
                    alternativeText: string | undefined;
                };
            };
        };
        authorsBio: {
            data: {
                attributes: {
                    name: string;
                    avatar: {
                        data: {
                            attributes: {
                                url: string;
                            };
                        };
                    };
                };
            };
        };
        blocks: any[];
        publishedAt: string;
        updatedAt: string;
    };
}

export default function Post({ data }: { data: Article }) {
    const { title, description, updatedAt, cover, authorsBio } = data.attributes;
    const image = cover?.data?.attributes?.formats.medium || cover?.data?.attributes?.formats.small || cover?.data?.attributes?.formats.thumbnail
    const imageUrl = image?.url;
    const altImage = cover?.data?.attributes?.alternativeText;
    const author = authorsBio?.data?.attributes;
    const authorImgUrl = author?.avatar?.data?.attributes?.url;

    return (
        <article className="space-y-8">
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={altImage ?? title}
                    width={image.width}
                    height={image.height}
                    className="w-full h-96 object-cover rounded-lg"
                />
            )}
            <div className="space-y-6">
                <h1 className="leading-tight text-3xl lg:text-5xl font-bold">{title}</h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
                    <div className="flex items-center gap-4">
                        {authorImgUrl && (
                            <Image
                                src={authorImgUrl}
                                alt={author.name}
                                width={400}
                                height={400}
                                className="w-14 h-14 border rounded-full"
                            />
                        )}
                        <p className="text-md flex flex-col">
                            <strong>{author && author.name}</strong> {formatDate(updatedAt)}
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <p className='pb-4'>{description}</p>
                {data.attributes.blocks.map((section: any, index: number) => postRenderer(section, index))}
            </div>
        </article>
    );
}
