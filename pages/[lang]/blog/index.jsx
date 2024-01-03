import PostList from "../../../components/shared/PostList"
import PageHeader from "../../../components/shared/PageHeader"
import { useCallback, useEffect, useState } from "react"
import { fetchAPI } from "../../../utils/fetch-api"
import PostListSkeleton from "../../../components/shared/PostListSkeleton"
import NoDataFound from "../../../components/shared/NoDataFound"
import { generateMetaData } from "../../../utils/generateMetaData"

export default function ArticleListEN() {
  const [meta, setMeta] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (start, limit) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/articles`;
      const urlParamsObject = {
        sort: { updatedAt: "desc" },
        populate: {
          cover: { fields: ["url", "alternativeText"] },
          category: { populate: "*" },
          authorsBio: {
            populate: "*",
          },
        },
        pagination: {
          start: start,
          limit: limit,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      if (start === 0) {
        setData(responseData.data);
      } else {
        setData((prevData) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function loadMorePosts(e) {
    e.preventDefault();
    const nextPosts = meta?.pagination?.start + meta?.pagination?.limit;
    fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  if (!isLoading && Array.isArray(data) && data?.length === 0) return <NoDataFound title={"No posts found"} />
  const seoData = {
    seoUrl: `https://asesoraparaguay.com/en/blog/`,
    metaTitle: "Asesora Paraguay - Blog",
    metaDescription: "Asesora Paraguay Blog",
  }

  return (
    <>
      {generateMetaData({ seo: seoData })}
      <section className='py-6 bg-white'>
        <PageHeader heading="Last articles" />
        {isLoading ? <PostListSkeleton /> : <PostList data={data}>
          {meta?.pagination?.start + meta?.pagination?.limit <
            meta?.pagination?.total && (
              <div className="flex justify-center">
                <button
                  onClick={(e) => loadMorePosts(e)}
                  type="button"
                  className="inline-flex justify-center px-4 border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-primaryColor hover:bg-white hover:text-secondaryColor
              transition-all duration-300 hover:border-secondaryColor focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondaryColor border py-2"
                >
                  Load more posts...
                </button>
              </div>
            )}
        </PostList>}
      </section>
    </>
  )
}
