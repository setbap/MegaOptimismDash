import names from "lib/utility/names";

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "MegaOptimisDash",
  titleTemplate: "%s | Business Intelligence Dashboard Optimis",
  defaultTitle: "MegaOptimisDash | Business Intelligence Dashboard Optimis ",
  description:
    "Best Business Intelligence Dashboard Optimis by MetricsDao, Flipside Crypto and Setbap ",
  canonical: "https://MegaOptimisDash.vercel.app/",
  openGraph: {
    url: "https://MegaOptimisDash.vercel.app/",
    title: "MegaOptimisDash",
    description:
      "Best Business Intelligence Dashboard Optimis by MetricsDao, Flipside Crypto and Setbap ",
    images: [
      {
        url: `https://${names.SITE_URL}/og.png`,
        alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
      },
    ],
    site_name: "MegaOptimisDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
