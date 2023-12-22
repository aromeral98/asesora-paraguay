
import type { Metadata } from 'next';
import { fetchAPI } from '../../utils/fetch-api';
import Post from '../../../../components/shared/Post';
import Layout from '../../../../components/shared/Layout';

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

async function getMetaData(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const urlParamsObject = {
        filters: { slug },
        populate: { seo: { populate: '*' } },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response.data;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const meta = await getMetaData(params.slug);
    console.log(meta);

    const metadata = meta?.[0]?.attributes?.seo;

    return {
        title: metadata?.metaTitle,
        description: metadata?.metaDescription,
    };
}

export default function PostRoute({ params }: { params: { slug: string } }) {

    const slug = "what-is-prompt-engineering-top-5-best-prompts-to-get-you-started";
    const data = {
        "data": [
            {
                "id": 6,
                "attributes": {
                    "title": "What is Prompt Engineering? Top 5 Best Prompts to Get You Started",
                    "description": "What is Prompt Engineering? Top 5 Best Prompts to Get You Started",
                    "slug": "what-is-prompt-engineering-top-5-best-prompts-to-get-you-started",
                    "createdAt": "2023-03-27T16:45:31.152Z",
                    "updatedAt": "2023-03-28T17:35:47.397Z",
                    "publishedAt": "2023-03-27T16:46:15.070Z",
                    "cover": {
                        "data": {
                            "id": 22,
                            "attributes": {
                                "url": "/uploads/ai_prompt_e43fe026b1.jpg"
                            }
                        }
                    },
                    "authorsBio": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "name": "Paul Brats",
                                "email": "paul@email.com",
                                "createdAt": "2023-03-22T16:29:48.165Z",
                                "updatedAt": "2023-03-28T19:11:11.793Z",
                                "avatar": {
                                    "data": {
                                        "id": 23,
                                        "attributes": {
                                            "name": "paul-brats.jpg",
                                            "alternativeText": null,
                                            "caption": null,
                                            "width": 200,
                                            "height": 200,
                                            "formats": {
                                                "thumbnail": {
                                                    "name": "thumbnail_paul-brats.jpg",
                                                    "hash": "thumbnail_paul_brats_012832af74",
                                                    "ext": ".jpg",
                                                    "mime": "image/jpeg",
                                                    "path": null,
                                                    "width": 156,
                                                    "height": 156,
                                                    "size": 2.56,
                                                    "url": "/uploads/thumbnail_paul_brats_012832af74.jpg"
                                                }
                                            },
                                            "hash": "paul_brats_012832af74",
                                            "ext": ".jpg",
                                            "mime": "image/jpeg",
                                            "size": 3.66,
                                            "url": "/uploads/paul_brats_012832af74.jpg",
                                            "previewUrl": null,
                                            "provider": "local",
                                            "provider_metadata": null,
                                            "createdAt": "2023-03-28T19:11:03.636Z",
                                            "updatedAt": "2023-03-28T19:11:03.636Z"
                                        }
                                    }
                                },
                                "articles": {
                                    "data": [
                                        {
                                            "id": 3,
                                            "attributes": {
                                                "title": "Unleashing the Power of Customization with Strapi CMS",
                                                "description": "Unleashing the Power of Customization with Strapi CMS",
                                                "slug": "unleashing-the-power-of-customization-with-strapi-cms",
                                                "createdAt": "2023-03-27T16:42:29.964Z",
                                                "updatedAt": "2023-03-28T17:36:16.970Z",
                                                "publishedAt": "2023-03-27T16:42:31.589Z"
                                            }
                                        },
                                        {
                                            "id": 4,
                                            "attributes": {
                                                "title": "largest-river-fleets-in-the-world",
                                                "description": "largest-river-fleets-in-the-world",
                                                "slug": "largest-river-fleets-in-the-world",
                                                "createdAt": "2023-03-27T16:43:21.632Z",
                                                "updatedAt": "2023-12-20T19:00:51.785Z",
                                                "publishedAt": "2023-03-27T16:43:22.293Z"
                                            }
                                        },
                                        {
                                            "id": 5,
                                            "attributes": {
                                                "title": "How to Improve Productivity Using ChatGPT",
                                                "description": "How to Improve Productivity Using ChatGPT",
                                                "slug": "how-to-improve-productivity-using-chat-gpt",
                                                "createdAt": "2023-03-27T16:44:32.497Z",
                                                "updatedAt": "2023-03-28T17:35:13.880Z",
                                                "publishedAt": "2023-03-27T16:44:37.554Z"
                                            }
                                        },
                                        {
                                            "id": 6,
                                            "attributes": {
                                                "title": "What is Prompt Engineering? Top 5 Best Prompts to Get You Started",
                                                "description": "What is Prompt Engineering? Top 5 Best Prompts to Get You Started",
                                                "slug": "what-is-prompt-engineering-top-5-best-prompts-to-get-you-started",
                                                "createdAt": "2023-03-27T16:45:31.152Z",
                                                "updatedAt": "2023-03-28T17:35:47.397Z",
                                                "publishedAt": "2023-03-27T16:46:15.070Z"
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    },
                    "category": {
                        "data": {
                            "id": 4,
                            "attributes": {
                                "name": "ai"
                            }
                        }
                    },
                    "blocks": [
                        {
                            "id": 6,
                            "__component": "shared.rich-text",
                            "body": "# What is Prompt Engineering? Top 5 Best Prompts to Get You Started\n\nPrompt engineering is the art of crafting effective prompts to generate valuable outputs from AI language models like GPT-3. By fine-tuning your prompts, you can improve the model's understanding of your query and obtain more accurate and relevant results. In this post, we'll introduce the concept of prompt engineering and share our top 5 best prompts to help you get started.\n\n## Understanding Prompt Engineering\n\nWhen interacting with AI language models, the input provided is called a \"prompt.\" A well-crafted prompt can significantly impact the model's response, making it more relevant, detailed, and useful. Prompt engineering involves refining and experimenting with different prompts to achieve the desired output. This process may include rephrasing your query, adding context, or providing examples for the model to follow.\n\n## Top 5 Best Prompts to Get You Started\n\n1. **Summarize an article:** To get a concise summary of a lengthy article, you can use a prompt like this: \"Please provide a brief summary of the following article: [insert article text or URL here].\"\n\n2. **Generate content ideas:** If you need fresh content ideas for a blog or marketing campaign, try a prompt like this: \"Generate 10 unique and engaging content ideas for a blog focusing on [your niche or topic].\"\n\n3. **Answer a specific question:** To get a detailed and accurate answer to a specific question, use a prompt like this: \"What are the main differences between [topic A] and [topic B]? Please provide a clear and concise comparison.\"\n\n4. **Convert technical information into layman's terms:** To explain complex concepts in simple terms, use a prompt like this: \"Explain the concept of [insert technical term or concept here] in simple, easy-to-understand language for someone who is not familiar with the subject.\"\n\n5. **Provide pros and cons:** If you're looking for a balanced view on a topic, try a prompt like this: \"List 5 pros and 5 cons of [insert subject or decision here].\"\n\nRemember, prompt engineering is an iterative process. Feel free to experiment with variations of these prompts to refine the AI's output and discover what works best for your specific needs.\n\nBy understanding the principles of prompt engineering and utilizing these top 5 prompts as a starting point, you can unlock the full potential of AI language models and obtain more valuable, relevant, and accurate results for your projects.\n"
                        }
                    ]
                }
            }
        ],
        "meta": {
            "pagination": {
                "page": 1,
                "pageSize": 25,
                "pageCount": 1,
                "total": 1
            }
        }
    }
    if (data.data.length === 0) return <h2>no post found</h2>;
    return <Layout>
            <section className='bg-white flex lg:w-8/12 justify-center container p-12 mx-auto'>
            <Post data={data.data[0]} />
            </section>
        </Layout>
}

export async function generateStaticParams() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/articles`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const articleResponse = await fetchAPI(
        path,
        {
            populate: ['category'],
        },
        options
    );

    return articleResponse.data.map(
        (article: {
            attributes: {
                slug: string;
                category: {
                    slug: string;
                };
            };
        }) => ({ slug: article.attributes.slug, category: article.attributes.slug })
    );
}
