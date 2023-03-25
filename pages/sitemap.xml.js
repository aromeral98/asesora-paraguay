
 //pages/sitemap.xml.js

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
           <loc>https://www.asesoraparaguay.com/</loc>
           <lastmod>2023-03-20</lastmod>
           <changefreq>monthly</changefreq>
           <priority>1.0</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/move-to-paraguay-as-a-freelancer/</loc>
           <lastmod>2023-03-25</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.99</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/residency/</loc>
           <lastmod>2023-03-25</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.98</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/en/article/paraguay-history-culture/</loc>
           <lastmod>2023-03-25</lastmod>
           <changefreq>daily</changefreq>
           <priority>1</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/en/article/how-paraguay-attracts-freelancers/</loc>
           <lastmod>2023-03-23</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.97</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/en/article/advantages-being-freelance-paraguay/</loc>
           <lastmod>2023-03-23</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.90</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/en/article/climate-paraguay/</loc>
           <lastmod>2023-03-23</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.96</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/en/article/tourism-paraguay-sites-visit/</loc>
           <lastmod>2023-03-23</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.95</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/en/article/low-taxed-countries-world/</loc>
           <lastmod>2023-03-23</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.94</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/en/article/paraguay-the-andorra-of-south-america/</loc>
           <lastmod>2023-03-24</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.93</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/en/article/paraguay-cuisine-discover-traditional-dishes/</loc>
           <lastmod>2023-03-24</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.92</priority>
       </url>
       <url>
           <loc>https://www.asesoraparaguay.com/contact/</loc>
           <lastmod>2023-03-11</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.5</priority>
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

