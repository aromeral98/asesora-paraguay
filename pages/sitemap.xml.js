
 //pages/sitemap.xml.js

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
           <loc>https://www.asesoraparaguay.com/</loc>
           <lastmod>2023-03-11</lastmod>
           <changefreq>monthly</changefreq>
           <priority>1.0</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/freelance/</loc>
           <lastmod>2023-03-11</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.8</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/residency/</loc>
           <lastmod>2023-03-11</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.6</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/article/advantages/</loc>
           <lastmod>2023-03-12</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.5</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/article/weather/</loc>
           <lastmod>2023-03-12</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.4</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/contact/</loc>
           <lastmod>2023-03-11</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.1</priority>
       </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;

