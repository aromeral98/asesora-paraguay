

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
  <loc>https://www.asesoraparaguay.com/en/el-salvador-presidency-nayib-bukele</loc>
  <lastmod>2024-01-08T22:43:03.422Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.96</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/argentinas-economic-landscape</loc>
  <lastmod>2024-01-05T08:28:38.584Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.95</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/argentinas-economic-challenge</loc>
  <lastmod>2024-01-05T08:28:45.501Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.94</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/profound-journey-meditation</loc>
  <lastmod>2024-01-05T08:28:17.697Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.93</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/transformative-power-of-travel</loc>
  <lastmod>2024-01-05T08:28:33.980Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.92</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/naples-pizza-authentic-italian-delight</loc>
  <lastmod>2024-01-04T19:42:01.079Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.91</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/challenges-faced-by-lgbti-individuals</loc>
  <lastmod>2024-01-03T20:39:04.530Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.90</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/immigration-benefits</loc>
  <lastmod>2024-01-04T17:48:38.385Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.89</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/lgtbiq-contributions</loc>
  <lastmod>2024-01-03T20:20:35.618Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.88</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/layers-of-machismo</loc>
  <lastmod>2024-01-03T20:20:54.401Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.87</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/global-warming-crisis</loc>
  <lastmod>2024-01-03T20:21:14.606Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.86</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/understanding-drought</loc>
  <lastmod>2024-01-03T20:21:33.226Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.85</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/navigating-climate-change</loc>
  <lastmod>2024-01-03T20:21:49.236Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.84</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/exploring-ecology</loc>
  <lastmod>2024-01-04T18:30:52.727Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.83</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/sweet-world-honey-bees</loc>
  <lastmod>2024-01-04T17:46:47.963Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.82</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/paraguayan-palate-pleaser-exploring-the-delights-of-sopa-paraguaya</loc>
  <lastmod>2023-12-26T11:04:13.967Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.81</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/savoring-tradition-exploring-paraguay-s-mbeju-a-cheesy-culinary-delight</loc>
  <lastmod>2023-12-26T10:59:47.926Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.80</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/sizzling-mastery-unveiling-the-art-of-paraguayan-asado-grilling-perfection</loc>
  <lastmod>2023-12-26T11:00:02.479Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.79</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/savoring-tradition-a-delectable-guide-to-chipa-paraguaya-paraguay-s-culinary-gem</loc>
  <lastmod>2024-01-03T17:13:41.123Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.78</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/paraguay-cuisine-discover-traditional-dishes-and-foods-in-paraguay</loc>
  <lastmod>2024-01-03T17:05:31.838Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.77</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/fluvial-fleets-of-china-russia-the-united-states-brazil-and-paraguay</loc>
  <lastmod>2024-01-03T17:02:23.186Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.76</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/exploring-the-culinary-delight-of-vori-vori-in-paraguayan-cuisine</loc>
  <lastmod>2024-01-03T17:02:37.959Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.75</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/discover-the-best-places-to-visit-in-paraguay-a-guide-to-tourism-in-paraguay</loc>
  <lastmod>2024-01-03T17:12:01.134Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.74</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/advantages-of-paraguay-s-river-market-for-importing-or-exporting</loc>
  <lastmod>2024-01-03T17:05:08.146Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.73</priority>
  </url>
  <url>
  <loc>https://www.asesoraparaguay.com/en/a-haven-for-digital-nomads-how-paraguay-attracts-digital-nomads</loc>
  <lastmod>2024-01-03T17:04:46.366Z</lastmod>
  <changefreq>daily</changefreq>
  <priority>0.72</priority>
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
