

function generateSiteMap() {
  const xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
  <url>
  <loc>https://www.asesoraparaguay.com/en/paraguay-cuisine-discover-traditional-dishes-and-foods-in-paraguay</loc>
  <lastmod>12/25/2023</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.96</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/fluvial-fleets-of-china-russia-the-united-states-brazil-and-paraguay</loc>
  <lastmod>12/25/2023</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.95</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/exploring-the-culinary-delight-of-vori-vori-in-paraguayan-cuisine</loc>
  <lastmod>12/25/2023</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.94</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/discover-the-best-places-to-visit-in-paraguay-a-guide-to-tourism-in-paraguay</loc>
  <lastmod>12/25/2023</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.93</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/advantages-of-paraguay-s-river-market-for-importing-or-exporting</loc>
  <lastmod>12/25/2023</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.92</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/a-haven-for-digital-nomads-how-paraguay-attracts-digital-nomads</loc>
  <lastmod>12/25/2023</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.91</priority>
  </url>
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
