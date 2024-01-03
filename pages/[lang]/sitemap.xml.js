

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
  <loc>https://www.asesoraparaguay.com/en/impact-of-immigration</loc>
  <lastmod>2024-01-03T17:29:24.677Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.96</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/lgtbiq-contributions</loc>
  <lastmod>2024-01-03T17:24:38.152Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.95</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/layers-of-machismo</loc>
  <lastmod>2024-01-03T17:22:27.402Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.94</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/global-warming-crisis</loc>
  <lastmod>2024-01-03T17:20:58.895Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.93</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/understanding-drought</loc>
  <lastmod>2024-01-03T17:19:09.187Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.92</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/navigating-climate-change</loc>
  <lastmod>2024-01-03T17:19:53.426Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.91</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/exploring-ecology</loc>
  <lastmod>2024-01-03T17:18:58.009Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.90</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/sweet-world-honey-bees</loc>
  <lastmod>2024-01-03T17:00:01.138Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.89</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/paraguayan-palate-pleaser-exploring-the-delights-of-sopa-paraguaya</loc>
  <lastmod>2023-12-26T11:04:13.967Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.88</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/savoring-tradition-exploring-paraguay-s-mbeju-a-cheesy-culinary-delight</loc>
  <lastmod>2023-12-26T10:59:47.926Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.87</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/sizzling-mastery-unveiling-the-art-of-paraguayan-asado-grilling-perfection</loc>
  <lastmod>2023-12-26T11:00:02.479Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.86</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/savoring-tradition-a-delectable-guide-to-chipa-paraguaya-paraguay-s-culinary-gem</loc>
  <lastmod>2024-01-03T17:13:41.123Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.85</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/paraguay-cuisine-discover-traditional-dishes-and-foods-in-paraguay</loc>
  <lastmod>2024-01-03T17:05:31.838Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.84</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/fluvial-fleets-of-china-russia-the-united-states-brazil-and-paraguay</loc>
  <lastmod>2024-01-03T17:02:23.186Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.83</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/exploring-the-culinary-delight-of-vori-vori-in-paraguayan-cuisine</loc>
  <lastmod>2024-01-03T17:02:37.959Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.82</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/discover-the-best-places-to-visit-in-paraguay-a-guide-to-tourism-in-paraguay</loc>
  <lastmod>2024-01-03T17:12:01.134Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.81</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/advantages-of-paraguay-s-river-market-for-importing-or-exporting</loc>
  <lastmod>2024-01-03T17:05:08.146Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/a-haven-for-digital-nomads-how-paraguay-attracts-digital-nomads</loc>
  <lastmod>2024-01-03T17:04:46.366Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.79</priority>
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
