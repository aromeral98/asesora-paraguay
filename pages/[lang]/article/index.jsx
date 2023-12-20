import Layout from "../../../components/shared/Layout"
import { jsonLDTypes } from "../../../jsonLD/types/en/jsonLDTypes"
import Head from "next/head"
import PostList from "../../../components/shared/PostList"
import PageHeader from "../../../components/shared/PageHeader"
import Loader from "../../../components/shared/Loader"
import { useCallback, useEffect, useState } from "react"
import { fetchAPI } from "../utils/fetch-api"

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
          sort: { createdAt: "desc" },
          populate: {
            cover: { fields: ["url"] },
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
          setData([
            {
                "id": 2,
                "attributes": {
                    "title": "The Benefits of a Headless CMS Like Strapi",
                    "description": "The Benefits of a Headless CMS Like Strapi",
                    "slug": "the-benefits-of-a-headless-cms-like-strapi",
                    "createdAt": "2023-03-22T17:06:03.591Z",
                    "updatedAt": "2023-03-28T20:29:07.836Z",
                    "publishedAt": "2023-03-22T17:06:03.589Z",
                    "blocks": [
                        {
                            "id": 2,
                            "__component": "shared.rich-text",
                            "body": "# The Benefits of a Headless CMS Like Strapi\n\nIn the world of content management systems (CMS), Strapi stands out as an exceptional choice for developers and content creators alike. As a headless CMS, Strapi offers several key advantages over traditional, monolithic CMS platforms. Let's dive into three major benefits of choosing a headless CMS like Strapi for your next project.\n\n## Enhanced Flexibility and Customization\n\nOne of the most significant benefits of Strapi is its flexibility. As a headless CMS, Strapi separates the content management backend from the frontend presentation layer. This enables developers to build highly customized websites and applications using their preferred tools, technologies, and frameworks. By leveraging Strapi's powerful API, developers can easily retrieve and manipulate content for a variety of platforms, from web and mobile applications to IoT devices and beyond.\n\n## Improved Performance and Scalability\n\nStrapi's headless architecture lends itself to high-performance applications. By decoupling the frontend and backend, Strapi allows for more efficient content delivery and enables developers to optimize frontend performance. Furthermore, Strapi's API-first approach ensures that content is delivered quickly, regardless of the platform or device. As a result, applications built with Strapi can be easily scaled to meet growing demands without the need for complex backend infrastructure changes.\n\n## Streamlined Content Management and Collaboration\n\nStrapi simplifies content management for creators and developers alike. Its intuitive admin panel offers a user-friendly experience for content creators, allowing them to focus on crafting high-quality content without worrying about the technical details. Meanwhile, developers can collaborate more efficiently by working on the frontend and backend independently. By choosing a headless CMS like Strapi, teams can streamline their content management processes and ensure a more enjoyable experience for all involved.\n"
                        }
                    ],
                    "cover": {
                        "data": {
                            "id": 4,
                            "attributes": {
                                "name": "kitten-4.jpg",
                                "alternativeText": null,
                                "caption": null,
                                "width": 1600,
                                "height": 1200,
                                "formats": {
                                    "thumbnail": {
                                        "name": "thumbnail_kitten-4.jpg",
                                        "hash": "thumbnail_kitten_4_59f6ced499",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 208,
                                        "height": 156,
                                        "size": 9,
                                        "url": "/uploads/thumbnail_kitten_4_59f6ced499.jpg"
                                    },
                                    "small": {
                                        "name": "small_kitten-4.jpg",
                                        "hash": "small_kitten_4_59f6ced499",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 500,
                                        "height": 375,
                                        "size": 37.42,
                                        "url": "/uploads/small_kitten_4_59f6ced499.jpg"
                                    },
                                    "large": {
                                        "name": "large_kitten-4.jpg",
                                        "hash": "large_kitten_4_59f6ced499",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 1000,
                                        "height": 750,
                                        "size": 115.26,
                                        "url": "/uploads/large_kitten_4_59f6ced499.jpg"
                                    },
                                    "medium": {
                                        "name": "medium_kitten-4.jpg",
                                        "hash": "medium_kitten_4_59f6ced499",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 750,
                                        "height": 563,
                                        "size": 72.29,
                                        "url": "/uploads/medium_kitten_4_59f6ced499.jpg"
                                    }
                                },
                                "hash": "kitten_4_59f6ced499",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 203.46,
                                "url": "/uploads/kitten_4_59f6ced499.jpg",
                                "previewUrl": null,
                                "provider": "local",
                                "provider_metadata": null,
                                "createdAt": "2023-03-02T19:05:10.068Z",
                                "updatedAt": "2023-03-23T18:50:58.609Z"
                            }
                        }
                    },
                    "authorsBio": {
                        "data": {
                            "id": 3,
                            "attributes": {
                                "name": "Megan",
                                "email": "meagan@email.com",
                                "createdAt": "2023-03-22T16:36:57.491Z",
                                "updatedAt": "2023-03-28T20:08:15.694Z"
                            }
                        }
                    },
                    "category": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "name": "strapi",
                                "slug": "strapi",
                                "description": "Strapi and headless CMS topics",
                                "createdAt": "2023-03-07T20:11:57.054Z",
                                "updatedAt": "2023-03-29T19:36:56.702Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 3,
                "attributes": {
                    "title": "Unleashing the Power of Customization with Strapi CMS",
                    "description": "Unleashing the Power of Customization with Strapi CMS",
                    "slug": "unleashing-the-power-of-customization-with-strapi-cms",
                    "createdAt": "2023-03-27T16:42:29.964Z",
                    "updatedAt": "2023-03-28T17:36:16.970Z",
                    "publishedAt": "2023-03-27T16:42:31.589Z",
                    "blocks": [
                        {
                            "id": 3,
                            "__component": "shared.rich-text",
                            "body": "# Unleashing the Power of Customization with Strapi CMS\n\nStrapi is an incredibly customizable headless content management system (CMS) that adapts to your unique project requirements. It empowers developers to build tailored solutions by offering numerous customization options and an easy-to-use interface. In our latest video, ***Why Strapi is Awesome***, we cover a wide range of topics, including how to use Strapi CLI, customizing controllers, routes, policies, and middleware, as well as harnessing Strapi's lifecycle hooks for even more control over your application.\n\nThroughout the video, we demonstrate how Strapi's CLI streamlines the process of creating, managing, and deploying your CMS projects. Furthermore, we delve into the customization of controllers, routes, and policies, showcasing how you can tailor Strapi to your specific needs and create a truly unique user experience. We also explore middleware customization, enabling you to enhance the functionality and performance of your application.\n\nIn addition to these customization features, we discuss Strapi's powerful lifecycle hooks, which allow developers to execute custom logic at various stages of the content creation and modification process. This level of control empowers you to build more sophisticated and dynamic applications with ease. Finally, we touch upon deploying your Strapi project to the cloud, ensuring a seamless and hassle-free experience from development to production.\n\nCheck out the following video to learn how to make the most of Strapi's customization capabilities and build remarkable applications that stand out in today's competitive digital landscape."
                        },
                        {
                            "id": 1,
                            "__component": "shared.video-embed",
                            "url": "https://www.youtube.com/watch?v=vrKALFk4ULc"
                        }
                    ],
                    "cover": {
                        "data": {
                            "id": 19,
                            "attributes": {
                                "name": "why-strapi-is-awesome.jpg",
                                "alternativeText": null,
                                "caption": null,
                                "width": 6100,
                                "height": 4067,
                                "formats": {
                                    "thumbnail": {
                                        "name": "thumbnail_why-strapi-is-awesome.jpg",
                                        "hash": "thumbnail_why_strapi_is_awesome_d27c4de907",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 234,
                                        "height": 156,
                                        "size": 9.1,
                                        "url": "/uploads/thumbnail_why_strapi_is_awesome_d27c4de907.jpg"
                                    },
                                    "small": {
                                        "name": "small_why-strapi-is-awesome.jpg",
                                        "hash": "small_why_strapi_is_awesome_d27c4de907",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 500,
                                        "height": 333,
                                        "size": 26.8,
                                        "url": "/uploads/small_why_strapi_is_awesome_d27c4de907.jpg"
                                    },
                                    "medium": {
                                        "name": "medium_why-strapi-is-awesome.jpg",
                                        "hash": "medium_why_strapi_is_awesome_d27c4de907",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 750,
                                        "height": 500,
                                        "size": 47.89,
                                        "url": "/uploads/medium_why_strapi_is_awesome_d27c4de907.jpg"
                                    },
                                    "large": {
                                        "name": "large_why-strapi-is-awesome.jpg",
                                        "hash": "large_why_strapi_is_awesome_d27c4de907",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 1000,
                                        "height": 666,
                                        "size": 71.37,
                                        "url": "/uploads/large_why_strapi_is_awesome_d27c4de907.jpg"
                                    }
                                },
                                "hash": "why_strapi_is_awesome_d27c4de907",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 1220.12,
                                "url": "/uploads/why_strapi_is_awesome_d27c4de907.jpg",
                                "previewUrl": null,
                                "provider": "local",
                                "provider_metadata": null,
                                "createdAt": "2023-03-28T16:23:16.446Z",
                                "updatedAt": "2023-03-28T16:23:16.446Z"
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
                                "updatedAt": "2023-03-28T19:11:11.793Z"
                            }
                        }
                    },
                    "category": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "name": "strapi",
                                "slug": "strapi",
                                "description": "Strapi and headless CMS topics",
                                "createdAt": "2023-03-07T20:11:57.054Z",
                                "updatedAt": "2023-03-29T19:36:56.702Z"
                            }
                        }
                    }
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
                    "publishedAt": "2023-03-27T16:43:22.293Z",
                    "blocks": [
                        {
                            "id": 4,
                            "__component": "shared.rich-text",
                            "body": "# How AI Will Change the Landscape of Building Products\n\nThe rapid advancements in artificial intelligence (AI) are poised to revolutionize the way we build products and services. As AI becomes increasingly integrated into our daily lives, it's important to consider the vast potential it holds for transforming product development across various industries. In this post, we'll explore four key ways AI is expected to reshape the landscape of building products.\n\n## Accelerated Design and Prototyping\n\nAI-powered tools are enabling designers and engineers to streamline their workflows by automating repetitive tasks and offering intelligent suggestions. With machine learning algorithms that can analyze vast amounts of data, AI systems can identify patterns and trends, making it easier to generate design ideas and optimize prototypes. This not only accelerates the design and prototyping process but also ensures that the final product is more efficient, cost-effective, and tailored to consumer needs.\n\n## Enhanced Personalization and User Experience\n\nAI's ability to analyze and interpret user behavior and preferences allows for greater personalization and more intuitive user experiences. By leveraging AI-driven analytics, developers can create products and services that are highly customized to individual users, ensuring a more satisfying and engaging experience. Additionally, AI-powered chatbots and virtual assistants are becoming increasingly sophisticated, offering personalized support and assistance to users in real-time, further elevating the overall user experience.\n\n## Improved Decision Making and Risk Management\n\nAI's predictive capabilities can provide valuable insights for product managers and stakeholders, enabling them to make better-informed decisions throughout the development process. By processing and analyzing large volumes of data, AI can help identify potential risks, anticipate market trends, and uncover opportunities for innovation. This allows teams to strategically allocate\n"
                        }
                    ],
                    "cover": {
                        "data": {
                            "id": 17,
                            "attributes": {
                                "name": "the-power-of-ai.jpg",
                                "alternativeText": null,
                                "caption": null,
                                "width": 5192,
                                "height": 3466,
                                "formats": {
                                    "thumbnail": {
                                        "name": "thumbnail_the-power-of-ai.jpg",
                                        "hash": "thumbnail_the_power_of_ai_4404748221",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 234,
                                        "height": 156,
                                        "size": 6.37,
                                        "url": "/uploads/thumbnail_the_power_of_ai_4404748221.jpg"
                                    },
                                    "medium": {
                                        "name": "medium_the-power-of-ai.jpg",
                                        "hash": "medium_the_power_of_ai_4404748221",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 750,
                                        "height": 500,
                                        "size": 34.42,
                                        "url": "/uploads/medium_the_power_of_ai_4404748221.jpg"
                                    },
                                    "large": {
                                        "name": "large_the-power-of-ai.jpg",
                                        "hash": "large_the_power_of_ai_4404748221",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 1000,
                                        "height": 667,
                                        "size": 55.4,
                                        "url": "/uploads/large_the_power_of_ai_4404748221.jpg"
                                    },
                                    "small": {
                                        "name": "small_the-power-of-ai.jpg",
                                        "hash": "small_the_power_of_ai_4404748221",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 500,
                                        "height": 334,
                                        "size": 18.38,
                                        "url": "/uploads/small_the_power_of_ai_4404748221.jpg"
                                    }
                                },
                                "hash": "the_power_of_ai_4404748221",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 3307.5,
                                "url": "/uploads/the_power_of_ai_4404748221.jpg",
                                "previewUrl": null,
                                "provider": "local",
                                "provider_metadata": null,
                                "createdAt": "2023-03-28T16:00:45.911Z",
                                "updatedAt": "2023-03-28T16:00:45.911Z"
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
                                "updatedAt": "2023-03-28T19:11:11.793Z"
                            }
                        }
                    },
                    "category": {
                        "data": {
                            "id": 4,
                            "attributes": {
                                "name": "ai",
                                "slug": "ai",
                                "description": "Articles on AI (artificial intelligence)",
                                "createdAt": "2023-03-28T15:59:31.957Z",
                                "updatedAt": "2023-03-28T15:59:31.957Z"
                            }
                        }
                    }
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
                    "publishedAt": "2023-03-27T16:44:37.554Z",
                    "blocks": [
                        {
                            "id": 5,
                            "__component": "shared.rich-text",
                            "body": "# How to Improve Productivity Using ChatGPT\n\nAs businesses strive to maximize productivity and efficiency, many are turning to innovative AI solutions like ChatGPT to streamline workflows and enhance collaboration. ChatGPT, powered by OpenAI, is an advanced language model designed to understand and generate human-like text. In this post, we'll explore four ways ChatGPT can be used to improve productivity in the workplace.\n\n## Streamline Communication and Collaboration\n\nChatGPT can be integrated into chat applications and communication platforms to assist in real-time conversations. By providing instant responses, clarifying questions, and offering suggestions, ChatGPT helps reduce the time spent on back-and-forth exchanges. This enables team members to communicate more effectively, minimizing misunderstandings and fostering better collaboration across departments.\n\n## Enhance Content Creation and Editing\n\nWriting and editing content can be a time-consuming task. ChatGPT can assist in generating drafts, suggesting ideas, or rephrasing content for clarity and coherence. By incorporating ChatGPT into your content creation process, you can save time and improve the quality of your written materials, from internal reports to marketing copy.\n\n## Automate Routine Tasks and Queries\n\nChatGPT can be utilized to create AI-powered chatbots that efficiently handle routine tasks and answer common questions. By automating these tasks, employees can focus on higher-value work and reduce the time spent on repetitive processes. Moreover, ChatGPT-driven chatbots can be used to provide instant customer support, improving the overall user experience.\n\n## Optimize Knowledge Management and Decision-Making\n\nWith its ability to understand context and analyze vast amounts of information, ChatGPT can help optimize knowledge management within your organization. By integrating ChatGPT into your knowledge base or internal wiki, you can ensure that employees have quick access to accurate and up-to-date information, enabling them to make better-informed decisions and work more efficiently.\n\nIn conclusion, ChatGPT offers a multitude of applications to enhance productivity in the workplace. By incorporating ChatGPT into your workflows, you can streamline communication, improve content creation, automate routine tasks, and optimize knowledge management, ultimately driving better results for your business.\n"
                        }
                    ],
                    "cover": {
                        "data": {
                            "id": 20,
                            "attributes": {
                                "name": "ai-productivity-tips.jpg",
                                "alternativeText": null,
                                "caption": null,
                                "width": 6431,
                                "height": 4287,
                                "formats": {
                                    "thumbnail": {
                                        "name": "thumbnail_ai-productivity-tips.jpg",
                                        "hash": "thumbnail_ai_productivity_tips_dad39acc9f",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 234,
                                        "height": 156,
                                        "size": 3.85,
                                        "url": "/uploads/thumbnail_ai_productivity_tips_dad39acc9f.jpg"
                                    },
                                    "large": {
                                        "name": "large_ai-productivity-tips.jpg",
                                        "hash": "large_ai_productivity_tips_dad39acc9f",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 1000,
                                        "height": 666,
                                        "size": 31.8,
                                        "url": "/uploads/large_ai_productivity_tips_dad39acc9f.jpg"
                                    },
                                    "medium": {
                                        "name": "medium_ai-productivity-tips.jpg",
                                        "hash": "medium_ai_productivity_tips_dad39acc9f",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 750,
                                        "height": 500,
                                        "size": 20.54,
                                        "url": "/uploads/medium_ai_productivity_tips_dad39acc9f.jpg"
                                    },
                                    "small": {
                                        "name": "small_ai-productivity-tips.jpg",
                                        "hash": "small_ai_productivity_tips_dad39acc9f",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 500,
                                        "height": 333,
                                        "size": 10.91,
                                        "url": "/uploads/small_ai_productivity_tips_dad39acc9f.jpg"
                                    }
                                },
                                "hash": "ai_productivity_tips_dad39acc9f",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 919.07,
                                "url": "/uploads/ai_productivity_tips_dad39acc9f.jpg",
                                "previewUrl": null,
                                "provider": "local",
                                "provider_metadata": null,
                                "createdAt": "2023-03-28T16:43:36.291Z",
                                "updatedAt": "2023-03-28T16:43:36.291Z"
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
                                "updatedAt": "2023-03-28T19:11:11.793Z"
                            }
                        }
                    },
                    "category": {
                        "data": {
                            "id": 4,
                            "attributes": {
                                "name": "ai",
                                "slug": "ai",
                                "description": "Articles on AI (artificial intelligence)",
                                "createdAt": "2023-03-28T15:59:31.957Z",
                                "updatedAt": "2023-03-28T15:59:31.957Z"
                            }
                        }
                    }
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
                    "publishedAt": "2023-03-27T16:46:15.070Z",
                    "blocks": [
                        {
                            "id": 6,
                            "__component": "shared.rich-text",
                            "body": "# What is Prompt Engineering? Top 5 Best Prompts to Get You Started\n\nPrompt engineering is the art of crafting effective prompts to generate valuable outputs from AI language models like GPT-3. By fine-tuning your prompts, you can improve the model's understanding of your query and obtain more accurate and relevant results. In this post, we'll introduce the concept of prompt engineering and share our top 5 best prompts to help you get started.\n\n## Understanding Prompt Engineering\n\nWhen interacting with AI language models, the input provided is called a \"prompt.\" A well-crafted prompt can significantly impact the model's response, making it more relevant, detailed, and useful. Prompt engineering involves refining and experimenting with different prompts to achieve the desired output. This process may include rephrasing your query, adding context, or providing examples for the model to follow.\n\n## Top 5 Best Prompts to Get You Started\n\n1. **Summarize an article:** To get a concise summary of a lengthy article, you can use a prompt like this: \"Please provide a brief summary of the following article: [insert article text or URL here].\"\n\n2. **Generate content ideas:** If you need fresh content ideas for a blog or marketing campaign, try a prompt like this: \"Generate 10 unique and engaging content ideas for a blog focusing on [your niche or topic].\"\n\n3. **Answer a specific question:** To get a detailed and accurate answer to a specific question, use a prompt like this: \"What are the main differences between [topic A] and [topic B]? Please provide a clear and concise comparison.\"\n\n4. **Convert technical information into layman's terms:** To explain complex concepts in simple terms, use a prompt like this: \"Explain the concept of [insert technical term or concept here] in simple, easy-to-understand language for someone who is not familiar with the subject.\"\n\n5. **Provide pros and cons:** If you're looking for a balanced view on a topic, try a prompt like this: \"List 5 pros and 5 cons of [insert subject or decision here].\"\n\nRemember, prompt engineering is an iterative process. Feel free to experiment with variations of these prompts to refine the AI's output and discover what works best for your specific needs.\n\nBy understanding the principles of prompt engineering and utilizing these top 5 prompts as a starting point, you can unlock the full potential of AI language models and obtain more valuable, relevant, and accurate results for your projects.\n"
                        }
                    ],
                    "cover": {
                        "data": {
                            "id": 22,
                            "attributes": {
                                "name": "ai-prompt.jpg",
                                "alternativeText": null,
                                "caption": null,
                                "width": 5192,
                                "height": 3466,
                                "formats": {
                                    "thumbnail": {
                                        "name": "thumbnail_ai-prompt.jpg",
                                        "hash": "thumbnail_ai_prompt_e43fe026b1",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 234,
                                        "height": 156,
                                        "size": 8.15,
                                        "url": "/uploads/thumbnail_ai_prompt_e43fe026b1.jpg"
                                    },
                                    "small": {
                                        "name": "small_ai-prompt.jpg",
                                        "hash": "small_ai_prompt_e43fe026b1",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 500,
                                        "height": 334,
                                        "size": 24.77,
                                        "url": "/uploads/small_ai_prompt_e43fe026b1.jpg"
                                    },
                                    "medium": {
                                        "name": "medium_ai-prompt.jpg",
                                        "hash": "medium_ai_prompt_e43fe026b1",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 750,
                                        "height": 500,
                                        "size": 47.18,
                                        "url": "/uploads/medium_ai_prompt_e43fe026b1.jpg"
                                    },
                                    "large": {
                                        "name": "large_ai-prompt.jpg",
                                        "hash": "large_ai_prompt_e43fe026b1",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 1000,
                                        "height": 667,
                                        "size": 73.64,
                                        "url": "/uploads/large_ai_prompt_e43fe026b1.jpg"
                                    }
                                },
                                "hash": "ai_prompt_e43fe026b1",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 2395.35,
                                "url": "/uploads/ai_prompt_e43fe026b1.jpg",
                                "previewUrl": null,
                                "provider": "local",
                                "provider_metadata": null,
                                "createdAt": "2023-03-28T17:06:52.873Z",
                                "updatedAt": "2023-03-28T17:06:52.873Z"
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
                                "updatedAt": "2023-03-28T19:11:11.793Z"
                            }
                        }
                    },
                    "category": {
                        "data": {
                            "id": 4,
                            "attributes": {
                                "name": "ai",
                                "slug": "ai",
                                "description": "Articles on AI (artificial intelligence)",
                                "createdAt": "2023-03-28T15:59:31.957Z",
                                "updatedAt": "2023-03-28T15:59:31.957Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 7,
                "attributes": {
                    "title": "Markdown Example Post",
                    "description": "Markdown Example Post",
                    "slug": "markdown-example-post",
                    "createdAt": "2023-03-27T17:41:52.663Z",
                    "updatedAt": "2023-03-28T20:45:10.863Z",
                    "publishedAt": "2023-03-27T17:41:53.428Z",
                    "blocks": [
                        {
                            "id": 7,
                            "__component": "shared.rich-text",
                            "body": "---\n__Advertisement :)__\n\n- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image\n  resize in browser.\n- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly\n  i18n with plurals support and easy syntax.\n\nYou will like those projects!\n\n---\n\n# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n---\n\n***\n\n\n## Typographic replacements\n\nEnable typographer option to see result.\n\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n\ntest.. test... test..... test?..... test!....\n\n!!!!!! ???? ,,  -- ---\n\n\"Smartypants, double quotes\" and 'single quotes'\n\n\n## Emphasis\n\n**This is bold text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also be nested...\n>> ...by using additional greater-than signs right next to each other...\n> > > ...or with spaces between arrows.\n\n\n## Lists\n\nUnordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\nOrdered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. ...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code \"fences\"\n\n```\nSample text here...\n```\n\nSyntax highlighting\n\n``` js\nvar foo = function (bar) {\n  return bar++;\n};\n\nconsole.log(foo(5));\n```\n\n## Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option | Description |\n| ------:| -----------:|\n| data   | path to data files to supply the data that will be passed into templates. |\n| engine | engine to be used for processing templates. Handlebars is the default. |\n| ext    | extension to be used for dest files. |\n\n\n## Links\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ \"title text!\")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n\n\n## Images\n\n![Minion](https://octodex.github.com/images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg \"The Stormtroopocat\")\n\nLike links, Images also have a footnote style syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining the URL location:\n\n[id]: https://octodex.github.com/images/dojocat.jpg  \"The Dojocat\"\n\n\n## Plugins\n\nThe killer feature of `markdown-it` is very effective support of\n[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).\n\n\n### [Emojies](https://github.com/markdown-it/markdown-it-emoji)\n\n> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:\n>\n> Shortcuts (emoticons): :-) :-( 8-) ;)\n\nsee [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.\n\n\n### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)\n\n- 19^th^\n- H~2~O\n\n\n### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)\n\n++Inserted text++\n\n\n### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)\n\n==Marked text==\n\n\n### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)\n\nFootnote 1 link[^first].\n\nFootnote 2 link[^second].\n\nInline footnote^[Text of inline footnote] definition.\n\nDuplicated footnote reference[^second].\n\n[^first]: Footnote **can have markup**\n\n    and multiple paragraphs.\n\n[^second]: Footnote text.\n\n\n### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)\n\nTerm 1\n\n:   Definition 1\nwith lazy continuation.\n\nTerm 2 with *inline markup*\n\n:   Definition 2\n\n        { some code, part of Definition 2 }\n\n    Third paragraph of definition 2.\n\n_Compact style:_\n\nTerm 1\n  ~ Definition 1\n\nTerm 2\n  ~ Definition 2a\n  ~ Definition 2b\n\n\n### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)\n\nThis is HTML abbreviation example.\n\nIt converts \"HTML\", but keep intact partial entries like \"xxxHTMLyyy\" and so on.\n\n*[HTML]: Hyper Text Markup Language\n\n### [Custom containers](https://github.com/markdown-it/markdown-it-container)\n\n::: warning\n*here be dragons*\n:::\n"
                        }
                    ],
                    "cover": {
                        "data": {
                            "id": 15,
                            "attributes": {
                                "name": "kitten-3.jpg",
                                "alternativeText": null,
                                "caption": "this is a caption",
                                "width": 1600,
                                "height": 1063,
                                "formats": {
                                    "thumbnail": {
                                        "name": "thumbnail_kitten-3.jpg",
                                        "hash": "thumbnail_kitten_3_2ae95b5e25",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 235,
                                        "height": 156,
                                        "size": 5.51,
                                        "url": "/uploads/thumbnail_kitten_3_2ae95b5e25.jpg"
                                    },
                                    "large": {
                                        "name": "large_kitten-3.jpg",
                                        "hash": "large_kitten_3_2ae95b5e25",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 1000,
                                        "height": 664,
                                        "size": 39.85,
                                        "url": "/uploads/large_kitten_3_2ae95b5e25.jpg"
                                    },
                                    "small": {
                                        "name": "small_kitten-3.jpg",
                                        "hash": "small_kitten_3_2ae95b5e25",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 500,
                                        "height": 332,
                                        "size": 15.24,
                                        "url": "/uploads/small_kitten_3_2ae95b5e25.jpg"
                                    },
                                    "medium": {
                                        "name": "medium_kitten-3.jpg",
                                        "hash": "medium_kitten_3_2ae95b5e25",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 750,
                                        "height": 498,
                                        "size": 26.51,
                                        "url": "/uploads/medium_kitten_3_2ae95b5e25.jpg"
                                    }
                                },
                                "hash": "kitten_3_2ae95b5e25",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 87.66,
                                "url": "/uploads/kitten_3_2ae95b5e25.jpg",
                                "previewUrl": null,
                                "provider": "local",
                                "provider_metadata": null,
                                "createdAt": "2023-03-22T16:23:50.092Z",
                                "updatedAt": "2023-03-27T17:41:13.822Z"
                            }
                        }
                    },
                    "authorsBio": {
                        "data": {
                            "id": 3,
                            "attributes": {
                                "name": "Megan",
                                "email": "meagan@email.com",
                                "createdAt": "2023-03-22T16:36:57.491Z",
                                "updatedAt": "2023-03-28T20:08:15.694Z"
                            }
                        }
                    },
                    "category": {
                        "data": {
                            "id": 2,
                            "attributes": {
                                "name": "strapi",
                                "slug": "strapi",
                                "description": "Strapi and headless CMS topics",
                                "createdAt": "2023-03-07T20:11:57.054Z",
                                "updatedAt": "2023-03-29T19:36:56.702Z"
                            }
                        }
                    }
                }
            },
            {
                "id": 8,
                "attributes": {
                    "title": "What are Role-Based Permissions in a Web Application?",
                    "description": "What are Role-Based Permissions in a Web Application?",
                    "slug": "what-are-role-based-permissions-in-a-web-application",
                    "createdAt": "2023-03-28T03:44:18.012Z",
                    "updatedAt": "2023-03-28T17:35:56.120Z",
                    "publishedAt": "2023-03-28T03:44:24.920Z",
                    "blocks": [
                        {
                            "id": 8,
                            "__component": "shared.rich-text",
                            "body": "# What are Role-Based Permissions in a Web Application?\n\nRole-based permissions are a critical aspect of web application security, ensuring that users have access to only the resources and functionality necessary for their role within the system. By implementing role-based permissions, developers can create a more secure, organized, and efficient web application environment. In this article, we'll explore the concept of role-based permissions and discuss their importance in web application development.\n\n## The Concept of Role-Based Permissions\n\nRole-based permissions, also known as role-based access control (RBAC), is an approach to managing user access in a web application based on predefined roles. Each role represents a specific set of permissions and responsibilities within the system, and users are assigned to these roles according to their job function or responsibilities. By utilizing roles, developers can more easily manage and control user access to resources and actions within the web application. This ensures that users can only access the data and perform the tasks relevant to their role, reducing the risk of unauthorized access or misuse of sensitive information.\n\n## The Importance of Role-Based Permissions in Web Application Development\n\nImplementing role-based permissions in a web application offers several benefits. First and foremost, it enhances security by minimizing the potential for unauthorized access and data breaches. By granting users access only to the resources and functionality required for their specific role, developers can prevent users from inadvertently or intentionally accessing sensitive information or causing damage to the system. Additionally, role-based permissions streamline user management, as developers can easily modify or update permissions for an entire role rather than individually adjusting access for each user. This saves time and reduces the likelihood of errors in the configuration of permissions. Finally, role-based permissions promote a more organized and efficient web application environment, as users can easily navigate and complete tasks relevant to their role without encountering irrelevant functionality or data.\n"
                        }
                    ],
                    "cover": {
                        "data": {
                            "id": 18,
                            "attributes": {
                                "name": "role-based.jpg",
                                "alternativeText": null,
                                "caption": null,
                                "width": 6016,
                                "height": 4016,
                                "formats": {
                                    "thumbnail": {
                                        "name": "thumbnail_role-based.jpg",
                                        "hash": "thumbnail_role_based_72d97832ff",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 234,
                                        "height": 156,
                                        "size": 4.65,
                                        "url": "/uploads/thumbnail_role_based_72d97832ff.jpg"
                                    },
                                    "large": {
                                        "name": "large_role-based.jpg",
                                        "hash": "large_role_based_72d97832ff",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 1000,
                                        "height": 668,
                                        "size": 42.47,
                                        "url": "/uploads/large_role_based_72d97832ff.jpg"
                                    },
                                    "small": {
                                        "name": "small_role-based.jpg",
                                        "hash": "small_role_based_72d97832ff",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 500,
                                        "height": 334,
                                        "size": 13.73,
                                        "url": "/uploads/small_role_based_72d97832ff.jpg"
                                    },
                                    "medium": {
                                        "name": "medium_role-based.jpg",
                                        "hash": "medium_role_based_72d97832ff",
                                        "ext": ".jpg",
                                        "mime": "image/jpeg",
                                        "path": null,
                                        "width": 750,
                                        "height": 501,
                                        "size": 26.39,
                                        "url": "/uploads/medium_role_based_72d97832ff.jpg"
                                    }
                                },
                                "hash": "role_based_72d97832ff",
                                "ext": ".jpg",
                                "mime": "image/jpeg",
                                "size": 2761.22,
                                "url": "/uploads/role_based_72d97832ff.jpg",
                                "previewUrl": null,
                                "provider": "local",
                                "provider_metadata": null,
                                "createdAt": "2023-03-28T16:17:42.534Z",
                                "updatedAt": "2023-03-28T16:17:42.534Z"
                            }
                        }
                    },
                    "authorsBio": {
                        "data": {
                            "id": 3,
                            "attributes": {
                                "name": "Megan",
                                "email": "meagan@email.com",
                                "createdAt": "2023-03-22T16:36:57.491Z",
                                "updatedAt": "2023-03-28T20:08:15.694Z"
                            }
                        }
                    },
                    "category": {
                        "data": {
                            "id": 3,
                            "attributes": {
                                "name": "tech",
                                "slug": "tech",
                                "description": "Article about tech",
                                "createdAt": "2023-03-27T19:15:55.083Z",
                                "updatedAt": "2023-03-28T17:09:55.201Z"
                            }
                        }
                    }
                }
            }
        ]);
        } else {
          setData((prevData) => [...prevData, ...responseData.data]);
        }
  
        setMeta({"meta":{"pagination":{"page":1,"pageSize":25,"pageCount":1,"total":7}}});
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }, []);
  
    function loadMorePosts() {
      const nextPosts = meta?.pagination?.start + meta?.pagination?.limit;
      fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
    }
  
    useEffect(() => {
      fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
    }, [fetchData]);
  
    if (isLoading) return <Loader />;
    return (
        <>
            <Head>
                <title>Interesting Articles about Paraguay - Asesora Paraguay</title>
                <meta name="description" content="Find here a selection of interesting articles about Paraguay on different topics: tourism, business, culture, among others." />
                <meta name="keywords" content="interesting articles, Paraguay, tourism, business, culture" />
                <meta name="author" content="Asesora Paraguay" />
                <meta property="og:title" content="Asesora Paraguay - Specialized office in migration and processing of residency and nationality" />
                <meta property="og:description" content="We are a specialized office in migration and processing of residency and nationality in Paraguay. We provide advice to entrepreneurs, investors, and digital nomads at every step of the process." />
                <meta property="og:image" content="https://asesoraparaguay.com/img/card.webp" />
                <meta property="og:url" content="https://asesoraparaguay.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Asesora Paraguay - Specialized office in migration and processing of residency and nationality" />
                <meta name="twitter:description" content="We are a specialized office in migration and processing of residency and nationality in Paraguay. We provide advice to entrepreneurs, investors, and digital nomads at every step of the process." />
                <meta name="twitter:image" content="https://asesoraparaguay.com/img/card.webp" />
                <meta name="twitter:url" content="https://asesoraparaguay.com" />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLDTypes.organization[0])}
                </script>
            </Head>
            <Layout>
            <section className='py-6 bg-white'>
                    <PageHeader heading="Last articles" />
                    <PostList data={data}>
                        {meta?.pagination?.start + meta?.pagination?.limit <
                            meta?.pagination?.total && (
                                <div className="flex justify-center">
                                    <button
                                        type="button"
                                        className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
                                        onClick={loadMorePosts}
                                    >
                                        Load more posts...
                                    </button>
                                </div>
                            )}
                    </PostList>
                </section>
            </Layout>
        </>
    )
}
