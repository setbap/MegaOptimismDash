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
import { getSimpleArrayData, getSimpleInfo } from "./utils";

// ✅ 
export const getNFT24HChange = () =>
  getSimpleInfo<NFT24HChange>(
    "88975a24-227b-4a60-a9b3-117ecb1fa20d",
    "24h Sales Count, 24h Sales Volume (in USD), 24h Unique Buyers, 24h Unique Sellers"
  );

// ✅ 
export const getNFTTotalInfo = () =>
  getSimpleInfo<NFTTotalInfo>(
    "4cff5840-9280-499a-a39d-c5d38ad76b12",
    "Total Sales Volume (in USD),Total Unique Buyers,Total Unique Sellers,Total Sales Count"
  );

// ✅ 
export const getNFTTotalDailyInfo = () =>
  getSimpleInfo<NFTTotalDailyInfo>(
    "376891fe-6a1a-41af-9a05-df2423c25065",
    "Daily Sales Volume (in USD),Daily NFT Price (in USD),Daily Sales Count,Daily Unique Buyers,Daily Unique Sellers"
  );

// ✅
export const getNFTSelling = () =>
  getSimpleArrayData<NFTSelling, NFTSelling>(
    "7c4b108c-c36d-47e9-ad14-d5735eef032f",
    "Weekly volume (in USD) of NFTs sold,Cumulative volume (in USD) of NFTs sold,Cumulative number of NFTs sold,Weekly average NFT price (in USD),Weekly number of NFT buyers Vsellers,Weekly number of NFTs sold",
    "Day"
  );
// ✅ 
export const getNFTMarketplaceComparison = () =>
  getSimpleArrayData<NFTMarketplaceComparison, NFTMarketplaceComparison>(
    "d712bb7a-c79d-4744-9302-122a1f3f3f5f",
    "Marketplaces share in volume of sale,Marketplaces share in number of sale"
  );
// ✅
export const getNFTCollectionsTransactions = () =>
  getSimpleArrayData<NFTCollectionsTransactions, NFTCollectionsTransactions>(
    "bc664203-5d4e-4f5a-a433-17315f1c7b22",
    "Top 10 NFT collections based on sold count"
  );

// ✅ 
export const getNFTCollectionsVolume = () =>
  getSimpleArrayData<NFTCollectionsVolume, NFTCollectionsVolume>(
    "02df7077-180b-4746-9810-818d2fc1a7ea",
    "Top 10 NFT collections based on volume"
  );

// ✅ 
export const getNFTCollectionsUniqueBuyers = () =>
  getSimpleArrayData<NFTCollectionsUniqueBuyers, NFTCollectionsUniqueBuyers>(
    "46922976-2a0a-4d2c-8a15-0ce71ad9124e",
    "Top 10 NFT collections based on unique buyers"
  );
