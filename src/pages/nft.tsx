import NFT from "lib/pages/nft";
import {
  getNFT24HChange,
  getNFTCollectionsTransactions,
  getNFTCollectionsUniqueBuyers,
  getNFTCollectionsVolume,
  getNFTMarketplaceComparison,
  getNFTSelling,
  getNFTTotalDailyInfo,
  getNFTTotalInfo,
} from "lib/requests/nft";
import { ReturnDataType } from "lib/types/base";
import {
  NFT24HChange,
  NFTCollectionsTransactions,
  NFTCollectionsUniqueBuyers,
  NFTCollectionsVolume,
  NFTMarketplaceComparison,
  NFTSelling,
  NFTTotalDailyInfo,
  NFTTotalInfo,
} from "lib/types/types/nfts";

export async function getStaticProps() {
  const [
    nFTTotalInfo,
    nFTTotalDailyInfo,
    nFTSelling,
    nFTMarketplaceComparison,
    nFTCollectionsTransactions,
    nFTCollectionsVolume,
    nFTCollectionsUniqueBuyers,
    nFT24HChange,
  ] = await Promise.all([
    getNFTTotalInfo(),
    getNFTTotalDailyInfo(),
    getNFTSelling(),
    getNFTMarketplaceComparison(),
    getNFTCollectionsTransactions(),
    getNFTCollectionsVolume(),
    getNFTCollectionsUniqueBuyers(),
    getNFT24HChange(),
  ]);

  return {
    props: {
      nFT24HChange,
      nFTTotalInfo,
      nFTTotalDailyInfo,
      nFTSelling,
      nFTMarketplaceComparison,
      nFTCollectionsTransactions,
      nFTCollectionsVolume,
      nFTCollectionsUniqueBuyers,
    },
    revalidate: 10 * 60,
  };
}

export type NFTProps = Pick<
  Awaited<ReturnType<typeof getStaticProps>>,
  "props"
>["props"];

export default NFT;
