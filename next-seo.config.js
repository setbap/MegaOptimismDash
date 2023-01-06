import names from "lib/utility/names";

/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "MegaOptimismDash",
  titleTemplate: "%s | Business Intelligence Dashboard Optimism",
  defaultTitle: "MegaOptimismDash | Business Intelligence Dashboard Optimism ",
  description:
    "Best Business Intelligence Dashboard Optimism by MetricsDao, Flipside Crypto and Setbap ",
  canonical: "https://MegaOptimismDash.vercel.app/",
  openGraph: {
    url: "https://MegaOptimismDash.vercel.app/",
    title: "MegaOptimismDash",
    description:
      "Best Business Intelligence Dashboard Optimism by MetricsDao, Flipside Crypto and Setbap ",
    images: [
      {
        url: `https://${names.SITE_URL}/og.png`,
        alt: `${names.APP_NAME} by Flipside Crypto and Setbap`,
      },
    ],
    site_name: "MegaOptimismDash",
  },
  twitter: {
    handle: "@flipsidecrypto",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
