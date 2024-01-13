// ./frontend/src/app/[lang]/components/PostList.tsx

import Image from "next/image";
import Link from "next/link";
import { formatDate } from "../../utils/api-helpers";

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
      category: {
        data: {
          attributes: {
            name: string;
            slug: string;
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

export default function PostList({
  data: articles,
  children,
}: {
  data: Article[];
  children?: React.ReactNode;
}) {
  return (
    <section className="container p-6 mx-auto space-y-6 sm:space-y-12">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles?.map((article) => {
          const image = article.attributes?.cover?.data?.attributes.formats?.small;
          const imageUrl = image?.url
          const altImage = article.attributes?.cover?.data?.attributes?.alternativeText
          const category = article.attributes.category.data?.attributes;
          const authorsBio = article.attributes.authorsBio.data?.attributes;

          return (
            <div
            key={article.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <Link href={`/en/blog/${category?.slug}/${article.attributes.slug}`} className="flex-shrink-0">
              {imageUrl && (
                <Image
                  priority={true}
                  alt={altImage ?? article.attributes.title}
                  width={image.width}
                  height={image.height}
                  className="h-48 w-full object-cover"
                  src={imageUrl}
                />
              )}
              </Link>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <Link href={`/en/blog/${category?.slug}`} className="hover:underline capitalize">
                      {category?.name}
                    </Link>
                  </p>
                  <Link href={`/en/blog/${category?.slug}/${article.attributes.slug}`} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{article.attributes.title}</p>
                    <p className="mt-3 text-base text-gray-500">{article.attributes.description}</p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <div>
                        {authorsBio?.name}
                      </div>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={article?.attributes?.updatedAt}>{formatDate(article?.attributes?.updatedAt)}</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {children && children}
    </section>
  );
}