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
          const image = article.attributes?.cover?.data?.attributes.formats?.small
          const imageUrl = image?.url
          const altImage = article.attributes?.cover?.data?.attributes?.alternativeText
          const category = article.attributes.category.data?.attributes;
          const authorsBio = article.attributes.authorsBio.data?.attributes;

          const avatarUrl = authorsBio?.avatar?.data?.attributes?.url


          return (
            <Link
              passHref
              href={`/en/blog/${category?.slug}/${article.attributes.slug}`}
              key={article.id}
              className="max-w-sm mx-auto group hover:no-underline focus:no-underline lg:w-[300px] xl:min-w-[375px] rounded-2xl overflow-hidden shadow-lg transition-all 300ms ease-in-out lg:hover:scale-105"
            >
              {imageUrl && (
                <Image
                  alt={altImage || article.attributes.title}
                  width={image.width}
                  height={image.height}
                  className="object-cover w-full"
                  src={imageUrl}
                />
              )}
              <div className="p-6 space-y-2 relative">
                <h3 className="text-2xl font-semibold group-focus:underline">
                  {article.attributes.title}
                </h3>

                <div className="flex justify-between items-center">
                  <span className="text-xs">
                    {formatDate(article.attributes.updatedAt)}
                  </span>
                  {authorsBio && (
                    <span className="text-xs">
                      {authorsBio.name}
                    </span>
                  )}
                </div>
                <p className="py-4">{article.attributes.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
      {children && children}
    </section>
  );
}