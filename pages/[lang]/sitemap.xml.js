// pages/sitemap.xml.js

import { fetchAPI } from '../../utils/fetch-api';

async function generateSiteMap() {
  // Fetch the list of articles from your backend
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const path = '/articles';
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const articlesResponse = await fetchAPI(path, {}, options);
  const articles = articlesResponse.data;

  // Sort articles by date in descending order
  const sortedArticles = articles.sort((a, b) => {
    const dateA = new Date(a.attributes.createdAt).getTime();
    const dateB = new Date(b.attributes.createdAt).getTime();
    return dateB - dateA;
  });

  // Generate the XML sitemap with the sorted articles data
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://www.asesoraparaguay.com/en</loc>
        <lastmod>2023-04-15</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
           <loc>https://www.asesoraparaguay.com/en/move-to-paraguay-as-a-freelancer/</loc>
           <lastmod>2023-04-15</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.99</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/en/residency/</loc>
           <lastmod>2023-04-15</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.98</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/en/contact/</loc>
           <lastmod>2023-04-15</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.97</priority>
       </url>

      ${sortedArticles
        .map((article, index) => {
          const slug = article.attributes.slug;
          const lastmod = new Date(article.attributes.updatedAt).toLocaleDateString(); // Set the last modification date as needed
          const changefreq = 'daily'; // Set the change frequency as needed
          const priority = (96 - index) / 100; // Priority decreases with index

          return `
            <url>
              <loc>https://www.asesoraparaguay.com/en/${slug}</loc>
              <lastmod>${lastmod}</lastmod>
              <changefreq>${changefreq}</changefreq>
              <priority>${priority.toFixed(2)}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  return xml;
}

function SiteMap() {
  // This page doesn't need a default export
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the sorted articles data
  const sitemap = await generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // We send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
