/**
 * Single Source of Truth for site configuration, SEO, domain, and metadata.
 * Update BASE_URL here to update canonical tags, sitemap, robots.txt, schema, and Open Graph.
 */
export const BASE_URL = "https://buildmyapp.store";

export const siteConfig = {
  name: "BuildMyApp by Ravana",
  brandName: "BuildMyApp by Ravana",
  shortName: "BuildMyApp",
  domain: "buildmyapp.store",
  baseUrl: BASE_URL,
  developerName: "Ravana",
  email: "rohittrv7@gmail.com",
  whatsapp: "https://wa.me/918227910516",
  phone: "+91 8227910516",
  github: "https://github.com/rohittrv7",
  
  // Google Search Console verification token
  // If truncated in screenshot, paste full token here:
  googleSiteVerification: "yiOVignidi7z8pYtQIIzlbYN89uI",

  themeColor: "#0C0E12",
  defaultOgImage: `${BASE_URL}/favicon.png`,
};
